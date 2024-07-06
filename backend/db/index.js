const { Sequelize } = require('sequelize');
const { db: dbConfig } = require('../config/env');

const sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

module.exports = sequelize;