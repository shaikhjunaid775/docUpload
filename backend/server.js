import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import uploadRoute from "./routes/uploadRoute.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      // "http://localhost:5173", // Vite
      // "http://localhost:3000", //
      // "http://localhost:5173",
      "http://192.168.1.153:5173",
      "https://docuploadv1.netlify.app",
    ],
    credentials: true,
  }),
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(console.error);

mongoose.connection.on("connected", () => {
  console.log("Mongo connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongo error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongo disconnected");
});

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoute);

app.get("/api", (req, res) => {
  res.send("Hello World! Your Express server is running.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
