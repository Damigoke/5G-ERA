require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/users')
const logger = require('morgan')
const paymentModel = require('./model/paymentModel')



//dotenv.config();

const app = express();
const PORT = 4000;


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connection Successfull");
  })
  .catch((err) => {
    console.error("Error connecting to Database:", err);
  });

app.use(express.json());
app.use(logger('dev'));
app.use('/users', userRouter); 


 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });