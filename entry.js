import express from 'express'
import mongoose from 'mongoose'

import Post from './schemas/Post.js'

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://semka:123@express-cluster.muwmi16.mongodb.net/?retryWrites=true&w=majority&appName=express-cluster'

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.status(200).json("Server works");
})

app.post('/post/create', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body;
        const post = await Post.create({author, title, content, picture});
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
})

async function startApp() {
    try {
        console.log('Connecting to DB...');
        await mongoose.connect(DB_URL);
        console.log('DB connected');
        app.listen(PORT, () => {console.log(`Server started on port ${PORT}`);})
    } catch (e) {
        console.log(e);
    }
}

startApp();