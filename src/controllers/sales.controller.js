import HttpStatus from 'http-status-codes';
import * as SalesService from '../services/sales.service';
// import sequelize, { DataTypes } from '../config/database';
// const Sales = require('../models/sales')(sequelize, DataTypes);
// const SalesItems = require('../models/sma_sale_items')(sequelize, DataTypes);
// const Warehouse = require('../models/warehouse')(sequelize, DataTypes);
const { Sales, SaleItem, Warehouse } = require('../models');
/**
 * Controller to get all saless available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllSaless = async (req, res, next) => {
  try {
    // const data = await SalesService.getAllSaless();
    const data = await Sales.findAll({
      include: [
        {
          model: SaleItem
        },
        { model: Warehouse }
      ]
    });

    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSales = async (req, res, next) => {
  try {
    const data = await SalesService.getSales(req.params.id);
    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newSales = async (req, res, next) => {
  try {
    const data = await SalesService.newSales(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Sales created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateSales = async (req, res, next) => {
  try {
    const data = await SalesService.updateSales(req.params.id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Sales updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a single sales
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteSales = async (req, res, next) => {
  try {
    await SalesService.updateSales(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Sales deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
