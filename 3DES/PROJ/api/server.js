const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/users', require('../routes/userRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
