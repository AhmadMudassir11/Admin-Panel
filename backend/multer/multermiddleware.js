import multer from 'multer'

//STORAGE

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'userImgs')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: Storage })
export default upload.single('image')