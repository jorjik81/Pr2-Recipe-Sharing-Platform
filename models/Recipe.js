const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FoodItem extends Model {}

FoodItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, // Use TEXT for longer descriptions
    },
    expiration_date: {
      type: DataTypes.DATEONLY, // Date only without time
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // Assuming 'user' is the name of the user model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true, // Enable timestamps to track creation and update time
    modelName: 'food_item', // Updated model name for food items
    tableName: 'food_items', // Plural form for table name
    underscored: true,
  }
);

module.exports = FoodItem;
