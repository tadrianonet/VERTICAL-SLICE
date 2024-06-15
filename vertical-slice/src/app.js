const express = require('express');
const userRoutes = require('./features/user/routes/userRoutes');
const investmentRoutes = require('./features/investment/routes/investmentRoutes');
const db = require('./config/db');

const app = express();

app.use(express.json());
db.connect();

app.use('/api', userRoutes);
app.use('/api', investmentRoutes);

module.exports = app;
