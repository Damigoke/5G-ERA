const express = require("express");
const investmentModel = require("../model/investmentModel")

const createInvestment = async(req ,res) => {
    try { 
        const verified = req.user;
        console.log(verified)
        const { machineName, amount, lifeCycle, dailyIncome } = req.body
        console.log(req.body)

        const createInvestment = await investmentModel.create({ userID: verified.id, machineName, amount, lifeCycle, dailyIncome})
        console.log(createInvestment)

        return res.status(201).json({ msg: "You have successfully Bought a Machine", createInvestment }) 
    }catch(err){
        return res.status(400).json({ msg: "Investment not found" });
    }
};

module.exports = createInvestment;