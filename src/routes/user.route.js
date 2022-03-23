import express from "express";
const router = express.Router();

//Controllers
import {
    createAnAccount,
    login,
} from "../controllers/user.controller.js";

//Routes
router.post('/create_an_account', createAnAccount);
router.post('/login', login);

export default router;