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
  isFreePeriod:{
    type:Sequelize.BOOLEAN,
    defaultValue:false
  },
  period: {
    type: Sequelize.INTEGER,
    validate: {
        isInt: true,
        min:1,
        max:7
    },
  }
  // need to add "startTime" and "endTime" for comparing MS to HS schedules later on
});

module.exports = Class;