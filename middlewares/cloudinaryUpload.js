import { uploadToCloudinary } from "../lib/filesUpload.js";

export const cloudinaryUploadMiddleware = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer, req.file.originalname);

    // Attach Cloudinary URL to req for later use
    req.imageUrl = result.secure_url;
    req.imageMimeType = req.file.mimetype;

    next(); // hand over to next middleware/controller
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
