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

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(postData)
  } catch (err) {
    res.status(500).json(err);
  }
  // get one post by its id
});

module.exports = router;