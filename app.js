// app.js
const express = require('express')
const cors = require('cors');
const { authRoutes, usersRoutes } = require('./routes/index');
const { ConnectDB, Database } = require('./config/index');

const app = express();

ConnectDB(Database.url);

// Middleware

app.use(
    cors({
        origin: true,
        credentials: true
    })
);

app.use(express.json());

// Routes
app.use('/CharlotteRoofRepairs/api/auth', authRoutes);
app.use('/CharlotteRoofRepairs/api/users', usersRoutes);

module.exports = app;
