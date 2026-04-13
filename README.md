# Rapha Self-Care

Static HTML/CSS site for Rapha Self-Care (shop, gallery, checkout placeholder).

## Local preview

From the project root:

```bash
python -m http.server 8899 --bind 127.0.0.1
```

Open `http://127.0.0.1:8899/`.

## Deploy on Hostinger (GitHub)

This repo is ready for **static hosting** (no build step). Site files live at the **repository root** (`index.html`, `styles.css`, `assets/`, etc.).

1. Push this repository to GitHub (`main` branch).
2. In **Hostinger hPanel** → **Websites** → your domain → **Git**.
3. Choose **Connect repository** and authorize **GitHub** if prompted.
4. Select repository **`Lordsi/Rapha-self-care`**, branch **`main`**.
5. Set the deployment path to your site root (often **`public_html`** for the main domain, or a subfolder for a subdomain).
6. Run **Deploy** / enable **automatic deployment** on push so each push to `main` updates the live site.

**Notes**

- `.htaccess` is included for Apache (default on Hostinger shared hosting): default document, no directory listing, basic cache and security headers.
- If you use **Hostinger’s “Force HTTPS”**, leave SSL handling in the panel; avoid adding extra HTTPS redirect rules that could conflict.
- Large assets (images, PDFs) are tracked in Git; if the repo grows very large, consider Git LFS later.

## Repository

Remote: `https://github.com/Lordsi/Rapha-self-care.git`

### First-time push from your computer

Git is initialized on `main` with `origin` set to the URL above. If automated push fails (large assets, slow network), open a terminal in this folder and run:

```bash
git config http.postBuffer 524288000
git push -u origin main
```

Sign in to GitHub when prompted (browser or [personal access token](https://github.com/settings/tokens) with `repo` scope). SSH users can run:

```bash
git remote set-url origin git@github.com:Lordsi/Rapha-self-care.git
git push -u origin main
```
