const router = require('express').Router()
const { User, Comment } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [User]
        })

        // serialize
        const comments = commentData.map((comment) => comment.get({ plain: true }))

        res.render('resume', {comments, loggedIn: req.session.loggedIn})

    } catch(err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req,res) => {
    // const userData = await User.findOne({ where: {user_id : req.session.user_id}})
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.user_id,
            resumeId: req.session.resume_id,
            content: req.body.content
        })
        console.log('here', req.session.user_id)
        // res.render('comments', { newComment })
        res.status(200).json(newComment)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router