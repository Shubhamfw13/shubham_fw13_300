const multer = require("multer");
const path = require("path");

const directory = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, directory);
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.random().toString();
    cb(null, uniquePrefix + "-" + file.originalname);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype == "image.jpg" ||
    file.mimetype == "image.jpeg" ||
    file.mimetype == "image.png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = {upload}
