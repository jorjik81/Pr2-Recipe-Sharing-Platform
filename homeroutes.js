const router = require('express').Router();
const { FoodItem, User } = require('../models'); // Assuming FoodItem is the model for shared food items
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all shared food items and join with user data
    const foodItemsData = await FoodItem.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data for the template
    const foodItems = foodItemsData.map((item) => item.get({ plain: true }));

    // Pass serialized data and session flag into the template
    res.render('homepage', {
      foodItems,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/fooditem/:id', async (req, res) => {
  try {
    const foodItemData = await FoodItem.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const foodItem = foodItemData.get({ plain: true });

    res.render('fooditem', {
      ...foodItem,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to the route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: FoodItem }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

