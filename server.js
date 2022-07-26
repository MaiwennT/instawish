const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes en avant dernier
app.use('/api/user', userRoutes);

// server toujours à la toute fin
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
