import PostService from '../Services/PostService.js';

class PostController {
	// Create a new post
	// POST /posts
	async POST_posts(req, res) {
		try {
		  	const post = await PostService.create(req.body, req.files?.picture);
		  	res.status(200).json({
			   message: "Post successfully created", 
				post: post
		  	});
	 	} catch(error) {
		  	res.status(500).json({
				message: "Failed to create post",
				error: error.message
		  	});
	 	}
	}
	// Get all posts
	// GET /posts
	async GET_posts(req, res) { 
		try {
			const posts = await PostService.getAll();
		  	res.status(200).json({
			    message: "Posts successfully received",
				 number_of_posts: posts.length,
				 posts: posts
		  	});
	 	} catch(error) {
		  	res.status(500).json({
				 message: "Failed to create post",
				 error: error.message
		  	});
	 	}
	}
	// Get a post by id
	// GET /posts/:id
	async GET_posts_id(req, res) {
		try {
			const {id} = req.params;
			if(!id) {
				res.status(400).json({
					message: "Bad request! Id is required"
				});
			}
			const post = await PostService.getOne(id);
			return res.status(200).json({
				message: "Post successfully received",
				post: post
			});
	 	} catch(error) {
		  	res.status(500).json({
				 message: "Failed to create post",
				 error: error.message
		  	});
	 	}
	 }
	// Update a post
	// PUT /posts
	async PUT_posts(req, res) {
		try {
			const post = req.body;
			if(!post._id) {
				return res.status(400).json({
					message: "Wrong HTTP request! Use POST to create a post or add _id to use this endpoint"
				});
			}
			const updatedPost = await PostService.update(post);
			res.status(200).json({
				message: "Post successfully updated",
				post: updatedPost
			});
	 	} catch(error) {
		  	res.status(500).json({
				 message: "Failed to create post",
				 error: error.message
		  	});
	 	}
	 }
	// Delete a post by id
	// DELETE /posts/:id
	async DELETE_posts_id(req, res) { 
		try {
			const {id} = req.params;
			if(!id) {
				return res.status(400).json({
					message: "Bad request! Id is required"
				});
			}
			const post = await PostService.delete(id);
			res.status(200).json({
				message: "Post successfully deleted",
				post: post
			});
	 	} catch(error) {
		  	res.status(500).json({
				 message: "Failed to create post",
				 error: error.message
		  	});
	 	}
	}
}

export default new PostController();