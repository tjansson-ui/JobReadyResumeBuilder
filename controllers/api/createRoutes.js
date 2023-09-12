const router = require('express').Router();
const { Resume, User } = require('../../models')

// create new resume
router.post('/', async (req, res) => {
    try{
        const newResume = await Resume.findAll({
            include: [
                {
                    model: Resume,
                    attributes: [
                        'fname', 
                        'lname', 
                        'email', 
                        'github', 
                        'company1', 
                        'role1', 
                        'description1', 
                        'rolestart', 
                        'roleend', 
                        'institute1', 
                        'degree1', 
                        'edstart', 
                        'edend', 
                        'skill1', 
                        'skill2', 
                        'skill3',
                    ],
                },
            ],
    })

    // save resume

    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
})

module.exports = router 