

const express = require('express'),
      app = express(),
      dotenv = require('dotenv').config(),
      cors = require('cors'),
      PORT = process.env.PORT || 4000,
      authRoutes = require('./routes/authRoutes'),
      {NotFound, errorHandler} = require('./middlewares/errorHandler'),
      dbConnection = require('./config/dbConnection');

app.use(express.json());
app.use(cors());

dbConnection();

app.use("/api/user", authRoutes);

app.use(NotFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log("server running on the port", PORT);
})