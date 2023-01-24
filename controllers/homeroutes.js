const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (_, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  // get all posts
});

module.exports = router;