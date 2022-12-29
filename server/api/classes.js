const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const { User,Class,Absence,Message,Day,Coverage } = require("../db");

// GET localhost:3000/api/classes
router.get('/',async(req, res, next) => {
    try {
        const classes = await Class.findAll({
            include:[User]
        });
        res.send(classes);
    }catch(error){
        next(error);
    };
});

// GET localhost:3000/api/classes/:classId
router.get('/:classId',async(req, res, next) => {
    try {
        const classInfo = await Class.findByPk(req.params.classId,{
            include:[User]
        });
        res.send(classInfo);
    }catch(error){
        next(error);
    };
});

// GET localhost:3000/api/classes/coverages/:period
router.get('/coverages/:period',async(req, res, next) => {
    try {
        const freePeriod = await Class.findOne({
            where:{
                period:req.params.period,
                isFreePeriod:true
            },
            include:[User]
        });
        res.send(freePeriod);
    }catch(error){
        next(error);
    };
});

module.exports = router;