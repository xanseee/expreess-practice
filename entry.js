import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import router from './PostModule/Routers/PostRouter.js';
import fileUpload from 'express-fileupload';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://semka:123@express-cluster.muwmi16.mongodb.net/?retryWrites=true&w=majority&appName=express-cluster';

const app = express();

app.use("/picture", express.static(path.join(__dirname, 'picture_storage')));
app.use(fileUpload({}));
app.use(express.json());
app.use('/api', router);

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