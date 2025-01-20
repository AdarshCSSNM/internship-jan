import multer from "multer";
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    let ext = file.originalname.substring(file.originalname.lastIndexOf("."));
    cb(null, uniqueSuffix + ext);
  },
});

let maxSize = 2 * 1024 * 1024;

const fileFilter = (req, file, cb) => {
  console.log(file.mimetype);
if (
    !file.mimetype.includes("image/jpeg") &&
    !file.mimetype.includes("image/png") &&
    !file.mimetype.includes("image/jpg")
){
      return cb(new Error("Only images are allowed!"), false);
  }
  cb(null,true);
};

const images = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
});

export default images;
