import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

const currentModulePath = new URL(import.meta.url).pathname;

app.get('*', (req, res) => {
  const indexPath = path.join(path.dirname(currentModulePath), 'dist', 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
