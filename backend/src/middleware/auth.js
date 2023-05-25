const express = require("express");
const userModel = require("../model/userModel.js");
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization.split(" ")[1];
    //req.cookies.token
    //req.headers.authorization.split(' ')[1];
    console.log(authorization);

    if (!authorization) {
      return res.status(401).json({ error: "Kindly Log in as a User" });
    }

    //const token = authorization.slice(7, authorization.length);

    let verified = jwt.verify(authorization, jwtsecret);
    //as { id: string };
    if (!verified) {
      console.log({ error: "Token not available on this route" });
    }

    const { id } = verified;

    //find user by id;
    const user = await userModel.findOne({ id: id });
    //id:verified.id
    if (user) {
      req.user = verified;
      //return res.status(200).send("Successfully Added")
    }

    req.user = verified;

    next();
  } catch (err) {
    return res.status(400).send("User not Loggedin");
  }
};

module.exports = auth;
