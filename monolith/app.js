const express = require('express');
const userRoutes = require('./routes/userRoutes');
const investmentRoutes = require('./routes/investmentRoutes');
const db = require('./config/db');

const app = express();

app.use(express.json());
db.connect();

app.use('/api', userRoutes);
app.use('/api', investmentRoutes);

module.exports = app;
