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
    try {
        const newComment = Comment.create({
            ...req.body,
            userId: req.session.user_id,
            postId: req.session.post_id,
            content: req.body.content
        })

        res.render('comments', { newComment })
        res.status(200).json(newComment)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router