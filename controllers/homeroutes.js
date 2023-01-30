const router = require('express').Router();
const { Post, User, Comment } = require('../models');

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
        {
          model: Comment,
          attributes: ['comment, user_id']
        }
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // get one post by its id
});

router.get('/login', (req, res) => {

  res.render('login');
  // renders login page
});

module.exports = router;
