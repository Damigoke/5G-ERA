require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/users')
const paymentRouter = require('./routes/payments');
const investmentRouter = require('./routes/investment');
const referralRouter = require('./routes/referrals');
const logger = require('morgan')
const userModel = require('../src/model/userModel')




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
app.use('/payments', paymentRouter);
app.use('/investment', investmentRouter);
app.use('/referrals', referralRouter);


 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });