const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');
const User = require('./user'); 

const IpHistory = sequelize.define('IpHistory', {
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  geoInfo: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

module.exports = IpHistory;
