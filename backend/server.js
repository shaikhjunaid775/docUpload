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
      "https://docuploadv1.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoute);

app.get("/api", (req, res) => {
  res.send("Hello World! Your Express server is running.");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(console.error);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});