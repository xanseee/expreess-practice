import Post from '../Schemas/Post.js';
import FileService from '../../FIleService/FileService.js';

class PostService {
	async create(post, picture) {
		const fileName = FileService.saveFile(picture);
		const createdPost = await Post.create({...post, picture: fileName});
		return createdPost;
	 }
	async getAll() { 
		const posts = await Post.find();
		return posts;
	}
	async getOne(id) {
		const post = await Post.findById(id);
		return post;
	}
	async update(post) {
		const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
		return updatedPost;
	}
	async delete(id) {
		await Post.findByIdAndDelete(id);
		return;
	}
}

export default new PostService();