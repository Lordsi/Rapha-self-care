const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const rootDir = __dirname;

app.use(express.static(rootDir));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const pages = ['index', 'shop', 'about', 'contact', 'gallery', 'checkout'];

pages.forEach((page) => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(rootDir, `${page}.html`));
  });
});

app.listen(PORT, () => {
  console.log(`Rapha Self-Care app running on http://localhost:${PORT}`);
});
