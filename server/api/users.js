const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User,Class,Absence,Message,Day,Coverage } = require("../db");

// GET localhost:3000/api/users/userId
router.get('/:userId',async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId,{
            include:[Class]
        });
        res.send(user);
    }catch(error){
        next(error);
    };
});

// GET localhost:3000/api/users
router.get('/',async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    }catch(error){
        next(error);
    };
});

module.exports = router;