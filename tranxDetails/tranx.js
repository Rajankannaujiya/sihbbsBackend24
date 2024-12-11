import { Router } from "express";

const router = Router();

router.get("/fetTrax", (req,res)=>{
    // code for the transaction to fetch details from the transactions 1000 transaction
    console.log(req.body)
}) 