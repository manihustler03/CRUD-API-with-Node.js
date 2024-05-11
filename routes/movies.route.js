import express from "express";
import { CreateMovie, MovieDelete, MovieIndex, MovieUpdate } from "../controllers/movies.controller";

const router = express.Router();

// C - For Creating movie

router.post("/",CreateMovie );

// R-For Reading movie
router.get("/",MovieIndex );

// U-For Updating movie
router.put("/:id",MovieUpdate );

// D-For Deleting movie
router.delete("/:id",MovieDelete );

export default router;
