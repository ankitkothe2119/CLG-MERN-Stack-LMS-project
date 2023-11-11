import  express  from "express";
import {getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyaToken } from "../middleware/auth.js";


const router = express.Router();

// read

router.get("/",verifyaToken, getFeedPosts);
router.get("/:userId/posts", verifyaToken, getUserPosts);

/* Update */
router.patch("/:id/like", verifyaToken, likePost);

export default router;