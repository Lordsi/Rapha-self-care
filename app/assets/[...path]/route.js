import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';

const MIME_TYPES = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.webp': 'image/webp',
};

function decodeSegment(segment) {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

export async function GET(_request, { params }) {
  const resolvedParams = await params;
  const pathSegments = (resolvedParams?.path ?? []).map(decodeSegment);
  const assetsRoot = join(process.cwd(), 'assets');
  const targetPath = normalize(join(assetsRoot, ...pathSegments));

  if (targetPath !== assetsRoot && !targetPath.startsWith(`${assetsRoot}${sep}`)) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const fileStat = await stat(targetPath);
    if (!fileStat.isFile()) {
      return new Response('Not found', { status: 404 });
    }

    const fileBuffer = await readFile(targetPath);
    const ext = extname(targetPath).toLowerCase();

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
