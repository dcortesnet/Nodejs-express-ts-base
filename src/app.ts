import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server running');
});
