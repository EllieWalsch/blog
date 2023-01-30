const router = require('express').Router();
const { Comment } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
  // adds a new comment
});

router.get('/', async (_, res) => {
    const commentData = await Comment.findAll();
  
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(comments);
});

module.exports = router;
