const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(express.json()); 


app.use(express.json());
app.use('/api', taskRoutes);
app.use(errorHandler);
app.use('/api/tasks', taskRoutes);


connectDB();

module.exports = app;
