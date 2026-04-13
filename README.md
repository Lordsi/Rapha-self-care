# Rapha Self-Care

Node.js (Express) app for the Rapha Self-Care website.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

3. Open:

`http://localhost:3000`

## Routes

- `/` and `/index`
- `/shop`
- `/about`
- `/contact`
- `/gallery`
- `/checkout`
- `/health` (JSON health check)

## Deploy on Hostinger (Node.js)

1. Push this project to GitHub (`main`).
2. In Hostinger hPanel, create/open your Node.js site.
3. Connect GitHub repository: `Lordsi/Rapha-self-care`.
4. Set branch: `main`.
5. Set startup file to `server.js`.
6. Install dependencies (`npm install`) from hPanel/terminal.
7. Start the app (`npm start`).

Hostinger should provide `PORT`; this app already uses `process.env.PORT`.

## Repository

Remote: `https://github.com/Lordsi/Rapha-self-care.git`
