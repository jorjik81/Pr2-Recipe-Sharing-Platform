const sequelize = require('../config/connection');
const { User, FoodItem } = require('../models'); // Assuming FoodItem is the model for shared food items

const userData = require('./userData.json');
const foodItemData = require('./foodItemData.json'); // Assuming this file contains data for shared food items

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const item of foodItemData) {
    await FoodItem.create({
      ...item,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
