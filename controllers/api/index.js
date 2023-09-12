const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createRoutes = require('./createRoutes')

router.use('/users', userRoutes);
router.use('/create', createRoutes)

module.exports = router;
