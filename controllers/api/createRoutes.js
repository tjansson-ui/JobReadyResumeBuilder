const router = require('express').Router();
const { Resume, User } = require('../../models')

router.get('/', async (req, res) => {
    try{
        const postedResumes = await Resume.findAll({
            include: [
                {
                    model: Comment,
                    include: [{ model: User }]
                }
            ]
        })

        const resumes = postedResumes.map((resume) => resume.get({ plain: true }))
        res.status(200).json({ resumes })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const resume = await Resume.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [
                        { model: User}
                    ]
                }
            ]
        })
        const singleResume = resume.get({ plain: true })
        res.status(200).json({singleResume})
    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const resume = await Resume.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            github: req.body.github,
            company1: req.body.company1,
            role1: req.body.role1,
            description1: req.body.description1,
            rolestart1: req.body.rolestart1,
            roleend1: req.body.roleend1,
            institute1: req.body.institute1,
            degree1: req.body.degree1,
            edstart1: req.body.edstart1,
            edend1: req.body.end1,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
        })
        res.status(200).json({ resume, message: `Resume Created` })

    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
})

module.exports = router 