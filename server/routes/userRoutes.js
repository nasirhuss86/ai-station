import express from "express";
import { auth } from "../middlewares/auth.js";
import { getUserCreations } from "../controllers/userController.js";
import { getPublishedCreations } from "../controllers/userController.js";
import { getUserLikes } from "../controllers/userController.js";


const userRouter = express.Router();


userRouter.post('/get-user-likes', auth, getUserLikes);
userRouter.get('/get-user-creations', auth, getUserCreations);
userRouter.get('/get-published-creations', auth, getPublishedCreations);

export default userRouter;          