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
            company2: req.body.company2,
            role2: req.body.role2,
            description2: req.body.description2,
            rolestart2: req.body.rolestart2,
            roleend2: req.body.roleend2,
            company3: req.body.company3,
            role3: req.body.role3,
            description3: req.body.description3,
            rolestart3: req.body.rolestart3,
            roleend3: req.body.roleend3,
            institute1: req.body.institute1,
            degree1: req.body.degree1,
            edstart1: req.body.edstart1,
            edend1: req.body.edend1,
            institute2: req.body.institute2,
            degree2: req.body.degree2,
            edstart2: req.body.edstart2,
            edend2: req.body.edend2,
            institute3: req.body.institute3,
            degree3: req.body.degree3,
            edstart3: req.body.edstart3,
            edend3: req.body.edend3,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3,
            user_id: req.session.user_id //is this needed??
        })
        res.status(200).json({ resume, message: `Resume Created` })

    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
})

module.exports = router 