const express = require("express");
const { Sequelize } = require("sequelize");
const router = express.Router();
const { User,Class,UserClass } = require("../db");

// GET localhost:3000/api/classes/:school/:period/:letter
router.get('/:school/:period/:letter',async(req, res, next) => {
    try {
        const [school,period,letter] = [req.params.school,req.params.period,req.params.letter];
        let classes;
        if(school==='HS'){
            classes = await Class.findAll({
                where:{
                    [Sequelize.Op.or]:[
                        {[Sequelize.Op.and]: [{ school: 'HS' },{ period: period },{letterDays:{[Sequelize.Op.contains]: [letter]}}]},
                        {[Sequelize.Op.and]: [{ school: 'MS' },{ period: period },{letterDays:{[Sequelize.Op.contains]: [letter]}}]},
                        {[Sequelize.Op.and]: [{ school: 'MS' },{ period: period-1 },{letterDays:{[Sequelize.Op.contains]: [letter]}}]}
                    ]
                },
                include:[User]
            });
        };
        if(school==='MS'){
            classes = await Class.findAll({
                where:{
                    [Sequelize.Op.or]:[
                        {[Sequelize.Op.and]: [{ school: 'MS' },{ period: period },{letterDays:{[Sequelize.Op.contains]: [letter]}}]},
                        {[Sequelize.Op.and]: [{ school: 'HS' },{ period: period },{letterDays:{[Sequelize.Op.contains]: [letter]}}]},
                        {[Sequelize.Op.and]: [{ school: 'HS' },{ period: period+1 },{letterDays:{[Sequelize.Op.contains]: [letter]}}]}
                    ]
                },
                include:[User]
            });
        };
        res.send(classes);
    }catch(error){
        next(error);
    };
});

// GET localhost:3000/api/classes/:classId
router.get('/:userId/:letter',async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId, {
            include: [
                {
                    model: Class,
                    where:{
                        letterDays:{[Sequelize.Op.contains]: [req.params.letter]}
                    },
                    through: {
                        model: UserClass,
                        where: {
                            userId: req.params.userId
                        }
                    }
                }
            ]
          });
          res.send(user.classes);
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

module.exports = router;