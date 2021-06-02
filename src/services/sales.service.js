import sequelize, { DataTypes } from '../config/database';
const Sales = require('../models/sales')(sequelize, DataTypes);

//get all saless
export const getAllSaless = async () => {
  const data = await Sales.findAll();
  return data;
};

//create new sales
export const newSales = async (body) => {
  const data = await Sales.create(body);
  return data;
};

//update single sales
export const updateSales = async (id, body) => {
  await Sales.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single sales
export const deleteSales = async (id) => {
  await Sales.destroy({ where: { id: id } });
  return '';
};

//get single sales
export const getSales = async (id) => {
  const data = await Sales.findByPk(id);
  return data;
};
