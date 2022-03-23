import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
env.config();
import cors from "cors";
import deserializeMiddleware from "./src/middleware/deserializeMiddleware.js";
import userRoutes from "./src/routes/user.route.js";
import videoRoutes from "./src/routes/video.route.js";
import noteRoutes from "./src/routes/note.route.js";
import morgan from "morgan";
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
app.use(deserializeMiddleware);


//Routes
app.use('/user', userRoutes);
app.use('/video', videoRoutes);
app.use('/note', noteRoutes);

//Connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Port
const PORT = process.env.PORT || 5000;

//Starting the app
app.listen(PORT, () => {
    console.log(`You are connected on port ${PORT}`);
});