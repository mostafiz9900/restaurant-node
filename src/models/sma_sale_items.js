'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.sales,{
      // });
    }
  }
  SaleItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sale_id: {
        type: DataTypes.INTEGER
      },
      product_id: {
        type: DataTypes.STRING
      },
      product_code: {
        type: DataTypes.STRING
      },
      product_name: {
        type: DataTypes.STRING
      },
      product_type: {
        type: DataTypes.STRING
      },
      option_id: {
        type: DataTypes.STRING
      },
      net_unit_price: {
        type: DataTypes.STRING
      },
      unit_price: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.STRING
      },
      warehouse_id: {
        type: DataTypes.STRING
      },
      item_tax: {
        type: DataTypes.STRING
      },
      tax_rate_id: {
        type: DataTypes.STRING
      },
      tax: {
        type: DataTypes.STRING
      },
      discount: {
        type: DataTypes.STRING
      },
      item_discount: {
        type: DataTypes.STRING
      },
      subtotal: {
        type: DataTypes.STRING
      },
      serial_no: {
        type: DataTypes.STRING
      },
      real_unit_price: {
        type: DataTypes.STRING
      },
      sale_item_id: {
        type: DataTypes.STRING
      },
      product_unit_id: {
        type: DataTypes.STRING
      },
      product_unit_code: {
        type: DataTypes.STRING
      },
      unit_quantity: {
        type: DataTypes.STRING
      },
      comment: {
        type: DataTypes.STRING
      },
      gst: {
        type: DataTypes.STRING
      },
      cgst: {
        type: DataTypes.STRING
      },
      sgst: {
        type: DataTypes.STRING
      },
      igst: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'saleItems',
      tableName: 'sma_sale_items'
    }
  );
  return SaleItem;
};
