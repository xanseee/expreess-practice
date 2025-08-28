import { Router } from 'express';
import PostController from '../Controllers/PostController.js';

import Post from '../Schemas/Post.js';

const router = new Router();

router.post('/posts', PostController.POST_posts); // Create a new post
router.get('/posts', PostController.GET_posts); // Get all posts
router.get('/posts/:id', PostController.GET_posts_id); // Get a post by id
router.put('/posts', PostController.PUT_posts); // Update a post
router.delete('/posts/:id', PostController.DELETE_posts_id); // Delete a post by id
// THIS ENDPOINT ONLY FOR TESTING
router.delete('/posts', async (req, res) => {
	await Post.deleteMany();
	res.end();
}); // Delete all posts

export default router;