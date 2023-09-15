const router = require('express').Router();
const { User } = require('../../models');

router.get('/current', async (req, res) => {
   res.json({user_id : req.session.user_id, username : req.session.username})
   console.log('*********', req, res)
})

router.post('/', async (req, res) => {
  try{
    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })

    req.session.save(() => {
      req.session.user_id = newUser.id
      req.session.email = newUser.email
      req.session.username = newUser.username
      req.session.logged_in = true
      
      res.status(200).json(newUser)
    })

  } catch(err) {
    console.log(err)
    res.status(401).json(err)
  }
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
