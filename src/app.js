const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({ message: 'TaskFlow API çalışıyor.' });
});

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`TaskFlow API http://localhost:${PORT} adresinde çalışıyor.`);
});