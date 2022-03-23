import express from "express";
const router = express.Router();

//Controllers
import {
    fetchVideos,
    createAVideo,
    removeVideo,
    fetchVideo,
} from "../controllers/video.controller.js";

//Middleware
import protectUser from "../middleware/protectUser.js";

//Routes
router.get('/', [protectUser], fetchVideos);
router.post('/create', [protectUser], createAVideo);
router.delete('/delete/:id', [protectUser], removeVideo);
router.get('/:id', [protectUser], fetchVideo);

export default router;