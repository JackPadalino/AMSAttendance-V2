const db = require("./db");
const Sequelize = require("sequelize");

const HSSchedule = db.define("hsschedule", {
  // id: {
  //     type: UUID,
  //     primaryKey: true,
  //     defaultValue: UUIDV4
  // },
  firstPeriod: {
    type: Sequelize.STRING
  },
  secondPeriod: {
    type: Sequelize.STRING
  },
  thirdPeriod: {
    type: Sequelize.STRING
  },
  fourthPeriod: {
    type: Sequelize.STRING
  },
  fifthPeriod: {
    type: Sequelize.STRING,
    defaultValue:'Lunch'
  },
  sixthPeriod: {
    type: Sequelize.STRING
  },
  seventhPeriod: {
    type: Sequelize.STRING
  }
});

module.exports = HSSchedule;