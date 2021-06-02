const Sequelize = require('sequelize');
/**
 *﻿ Database Connection.
 **/
// const sequelize ,{ DataTypes} = require('../config/database')
import sequelize, { DataTypes } from '../config/database';
const Sales = require('../models/sales')(sequelize, DataTypes);
const SaleItem = require('../models/sma_sale_items')(sequelize, DataTypes);
const Warehouse = require('../models/warehouse')(sequelize, DataTypes);

const models = {
  Sales,
  SaleItem,
  Warehouse
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize
};

module.exports = db;
