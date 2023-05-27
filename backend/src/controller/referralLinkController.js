const express = require("express");
const { ReferralLinkModel, ReferralClickModel } = require('../model/referralLinkModel');
const userModel = require("../model/userModel.js");


const createReferralLinks = async (req, res) => {
    try {
      const verifiedUser = req.user;
  
      const referralLink = generateReferralLink(verifiedUser.id);
  
     if(referralLink) {
        
        const newReferralLink = await ReferralLinkModel.create({
        user: verifiedUser.id,
        link: referralLink,
      });
  
      await newReferralLink.save();
  
      res.status(201).json({ link: referralLink });
    }
    return res.status(400).json({ msg: "referralLink already exists" })
    } catch (error) {
      console.error('Error creating referral link:', error);
      res.status(500).json({ error: 'An error occurred while creating the referral link.' });
    }
  };

  const generateReferralCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 8;
    let referralCode = '';
  
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referralCode += characters.charAt(randomIndex);
    }
  
    return referralCode;
  }

  

  const generateReferralLink = (userId) => {
    const baseURL = 'https://5g-era.in/signup';
    const referralCode = generateReferralCode(); // Function to generate a unique referral code
  
    return `${baseURL}?ref=${referralCode}-${userId}`;
  }


  //CREATE REFERRALCLICKS
//   const referredUsers = [];

//   const createReferralClicks = async (req, res) => {
//     try {
//       const referrerId = req.query.referrerId;
//       console.log(referrerId);
//       let referredUserId = null;
  
//       // Check if the user is authenticated
//       if (req.user) {
//         referredUserId = req.user.id;
//       }
  
//       // Record the referral click in the database
//       const newReferralClick = await ReferralClickModel.create({
//         referrer: referrerId,
//         referredUser: referredUserId,
//       });
  
//       await newReferralClick.save();
  
  
//       // Add the referred user to the list of users under the referrer
//       if (referredUserId) {
//         const referrer = await userModel.findById(referrerId);
//         referrer.referredUsers.push(referredUserId);
//         await referrer.save();
//       }
  
//       // Redirect the user to the desired destination
//       // res.redirect('https://5g-era.in/signup');
//       res.status(201).json({ link: 'https://5g-era.in/signup' });
//     } catch (error) {
//       console.error('Error recording referral click:', error);
//       res.status(500).json({ error: 'An error occurred while recording the referral click.' });
//     }
//   };
  
      
   
  module.exports = { createReferralLinks };