import  FileModel from "../model/Upload.js";

export const UploadUserDoc = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const savedFiles = await Promise.all(
      req.files.map((file) =>
        new FileModel({
          name: file.originalname,
          path: file.path,
        }).save()
        
      )
    );

    console.log("savedFiles: ", savedFiles)
    res.status(200).json({
      message: "Files uploaded successfully",
      data: savedFiles,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};