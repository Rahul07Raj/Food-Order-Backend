const express = require('express');
// import express from "express";
// import dotenv from "dotenv"
const dotenv =require('dotenv');

dotenv.config({
    path:"./config/config.env",
})

const app = express();


module.exports =  app;