import express from "express";
const router = express.Router();

//Controllers
import {
    fetchNotes,
    createANote,
    removeNote
} from "../controllers/note.controller.js";

//Middleware
import protectUser from "../middleware/protectUser.js";

//Routes
router.get('/:id', [protectUser], fetchNotes);
router.post('/create', [protectUser], createANote);
router.delete('/delete/:id', [protectUser], removeNote);

export default router;