const db = require("./db");
const Sequelize = require("sequelize");

const Class = db.define("class", {
  // id: {
  //     type: UUID,
  //     primaryKey: true,
  //     defaultValue: UUIDV4
  // },
  name: {
    type: Sequelize.STRING
  },
  grade:{
    type:Sequelize.INTEGER,
    validate:{
      min:6,
      max:12
    },
    allowNull:false
  },
  school:{
    type:Sequelize.ENUM,
    allowNull:false,
    values:['MS','HS']
  },
  period:{
    type:Sequelize.INTEGER,
    validate:{
      min:1,
      max:7
    },
    allowNull:false,
  },
  startTime:{
    type:Sequelize.INTEGER,
    allowNull:false,
    validate:{
      isInt:true,
      min:600,
      max:1800
    }
  },
  endTime:{
    type:Sequelize.INTEGER,
    allowNull:false,
    validate:{
      isInt:true,
      min:600,
      max:1800
    }
  },
  letterDays:{
    type:Sequelize.ARRAY(Sequelize.CHAR),
    allowNull:false
  },
  isFreePeriod:{
    type:Sequelize.BOOLEAN,
    defaultValue:false
  }
});

module.exports = Class;