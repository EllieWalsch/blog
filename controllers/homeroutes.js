const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (_, res) => {
  const postData = await Post.findAll({
    include: [ User ],
  });

  const posts = postData.map((post) => post.get({ plain: true }));
  console.log(posts);
  res.render('homepage', { posts });

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
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  // get one post by its id
});

module.exports = router;
