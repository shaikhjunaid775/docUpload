// routes/uplRoutes.js
import express from "express";
import { UploadUserDoc } from "../controllers/uploadController.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/upload", upload.array("files"), UploadUserDoc);

export default router;