import { Router } from 'express';
import PostController from '../Controllers/PostController.js';

import Post from '../Schemas/Post.js';

const router = new Router();

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts', PostController.update);
router.delete('/posts/:id', PostController.delete);
// THIS ENDPOINT ONLY FOR TESTING -> delete all posts
router.delete('/posts', async (req, res) => {
	await Post.deleteMany();
	res.end();
});

export default router;