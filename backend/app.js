const express = require('express');
const userRoutes = require('./routes/userRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const interactionRoutes = require('./routes/interactionRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/interaction', interactionRoutes);

module.exports = app;
