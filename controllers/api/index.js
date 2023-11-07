const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes'); // Changing from 'projectRoutes' to 'recipeRoutes'

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes); // Changing from '/projects' to '/recipes'

module.exports = router;

