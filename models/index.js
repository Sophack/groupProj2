const router = require('express').Router();
const bookRoutes = require('../controllers/api/foodRoutes');

// Prefix all routes defined in `foodRoutes.js` with `/food
router.use('/food', bookRoutes);

module.exports = router;
