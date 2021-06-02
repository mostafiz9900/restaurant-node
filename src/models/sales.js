'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log('models.warehouse');
      Sales.hasOne(models.Warehouse, {
        foreignKey: 'id',
        sourceKey: 'warehouse_id'
      });
      this.hasMany(models.SaleItem, {
        foreignKey: 'sale_id'
      });
      // this.belongsToMany(models.saleItems,{ foreignKey: 'sale_id'});

      // console.log(models);
      // console.log('models=====');
      // this.hasOne(models.warehouse ,{
      //     foreignKey: 'id',
      //     sourceKey: 'warehouse_id'
      // });

      // or
      //   this.myAssociation = models.MyModel.belongsTo(models.OtherModel);
      //   this.hasMany(models.sma_sale_items,{
      //     foreignKey: 'sale_id'

      // });
    }
  }

  Sales.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.STRING
      },
      reference_no: {
        type: DataTypes.STRING
      },
      customer_id: {
        type: DataTypes.STRING
      },
      customer: {
        type: DataTypes.STRING
      },
      biller_id: {
        type: DataTypes.STRING
      },
      biller: {
        type: DataTypes.STRING
      },
      warehouse_id: {
        type: DataTypes.INTEGER
      },
      note: {
        type: DataTypes.STRING
      },
      staff_note: {
        type: DataTypes.STRING
      },
      total: {
        type: DataTypes.STRING
      },
      product_discount: {
        type: DataTypes.STRING
      },
      order_discount_id: {
        type: DataTypes.STRING
      },
      total_discount: {
        type: DataTypes.STRING
      },
      order_discount: {
        type: DataTypes.STRING
      },
      product_tax: {
        type: DataTypes.STRING
      },
      order_tax_id: {
        type: DataTypes.STRING
      },
      order_tax: {
        type: DataTypes.STRING
      },
      total_tax: {
        type: DataTypes.STRING
      },
      shipping: {
        type: DataTypes.STRING
      },
      grand_total: {
        type: DataTypes.STRING
      },
      sale_status: {
        type: DataTypes.STRING
      },
      payment_status: {
        type: DataTypes.STRING
      },
      payment_term: {
        type: DataTypes.STRING
      },
      due_date: {
        type: DataTypes.STRING
      },
      created_by: {
        type: DataTypes.STRING
      },
      updated_by: {
        type: DataTypes.STRING
      },
      updated_at: {
        type: DataTypes.STRING
      },
      total_items: {
        type: DataTypes.STRING
      },
      pos: {
        type: DataTypes.STRING
      },
      paid: {
        type: DataTypes.STRING
      },
      return_id: {
        type: DataTypes.STRING
      },
      surcharge: {
        type: DataTypes.STRING
      },
      attachment: {
        type: DataTypes.STRING
      },
      return_sale_ref: {
        type: DataTypes.STRING
      },
      sale_id: {
        type: DataTypes.STRING
      },
      return_sale_total: {
        type: DataTypes.STRING
      },
      rounding: {
        type: DataTypes.STRING
      },
      suspend_note: {
        type: DataTypes.STRING
      },
      api: {
        type: DataTypes.STRING
      },
      shop: {
        type: DataTypes.STRING
      },
      address_id: {
        type: DataTypes.STRING
      },
      reserve_id: {
        type: DataTypes.STRING
      },
      hash: {
        type: DataTypes.STRING
      },
      manual_payment: {
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
      },
      payment_method: {
        type: DataTypes.STRING
      },
      order_status: {
        type: DataTypes.STRING
      },
      customer_type: {
        type: DataTypes.STRING
      },
      table_no: {
        type: DataTypes.STRING
      },
      local_id: {
        type: DataTypes.STRING
      },
      online_id: {
        type: DataTypes.STRING
      },
      is_syncronize: {
        type: DataTypes.STRING
      },
      order_platform: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Sales',
      tableName: 'sma_sales'
    }
  );

  return Sales;
};
