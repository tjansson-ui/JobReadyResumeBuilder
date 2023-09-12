const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createRoutes = require('./createRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/create', createRoutes)
router.use('/comment', commentRoutes)

module.exports = router;
