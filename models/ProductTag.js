const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const Product = require('./Product.js')
const Tag = require('./Tag.js')

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id: {
      type: DataTypes.INTEGER,
    },

    tag_id: {
      type: DataTypes.INTEGER,
    }, 
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
ProductTag.belongsTo(Product, {foreignKey: 'product_id', targetKey: 'id'})
ProductTag.belongsTo(Tag, {foreignKey: 'tag_id', targetKey: 'id'})
module.exports = ProductTag;
