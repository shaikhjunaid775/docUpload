import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  name: String,
  path: String,
  uploadDate: { type: Date, default: Date.now }
});
export default mongoose.model('Files', FileSchema);

