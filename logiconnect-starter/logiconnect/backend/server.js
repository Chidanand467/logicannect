
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to LogiConnect API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
