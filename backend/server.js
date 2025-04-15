import express from 'express';
const app = express();
const PORT = 3001;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('holla');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
