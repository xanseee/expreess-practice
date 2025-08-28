import { v4 as uuid_v4 } from 'uuid';
import * as path from 'path';

class FileService {
	saveFile(file) {
		try {
			const fileName = uuid_v4() + '.jpg';
			const filePath = path.resolve('picture_storage', fileName);
			file.mv(filePath);
			return fileName;
		} catch (e) {
			console.log(e);
		}
	}
}

export default new FileService();