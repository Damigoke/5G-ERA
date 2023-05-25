const express = require("express");
const paymentModel = require("../model/paymentModel")

const createPayment = async(req ,res) => {
    try { 
        const verified = req.user;
        console.log(verified)
        const { amount } = req.body
        console.log(req.body)

        const createPayment = await paymentModel.create({ userID: verified.id, amount})
        console.log(createPayment)

        return res.status(201).json({ msg: "You have successfully Recharge your account", createPayment }) 
    }catch(err){
        return res.status(400).json({ msg: "Payment not found" });
    }
};

module.exports = createPayment