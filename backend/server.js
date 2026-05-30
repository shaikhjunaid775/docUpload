import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import uploadRoute from "./routes/uploadRoute.js"

import cors from "cors"

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/api/auth", authRoutes)
app.use("/api/upload", uploadRoute)

const PORT = 3000

app.get('/api', (req, res)=>{
    res.send('Hello World! Your Express server is running.');
})

app.listen(PORT, () => {
  console.log(`Server is successfully running at http://localhost:${PORT}`);
});