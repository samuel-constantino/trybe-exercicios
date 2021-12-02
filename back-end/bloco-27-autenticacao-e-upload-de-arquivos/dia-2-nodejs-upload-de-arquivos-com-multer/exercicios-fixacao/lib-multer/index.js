const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

const app = express();

app.post('/profile', upload.single('avatar'), (req, res) => {
    const file = req.file;

    res.status(200).json({ file });
});

app.post('/photos/upload', upload.array('photos', 2), (req, res, next) => {
    try {
        const files = req.files;
        
        return res.status(200).json({ files });
    } catch (err) {
        next(err);
    }

});

app.use((err, req, res, _next) => {
    if (err instanceof multer.MulterError) {
        return res.status(401).json({ err });
    }

    return res.status(500).json({ message: 'Internal Error' });
});

app.listen(3000, () => { console.log('Ouvindo') });



