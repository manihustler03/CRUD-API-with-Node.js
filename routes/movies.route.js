import express from "express";

const router = express.Router();

// C - For Creating movie

router.post("/", (req,res) => {
    res.send("Create a movie")
});

// R-For Reading movie
router.get("/", (req,res) => {
    res.send("Get all movie lists")
});

// U-For Updating movie
router.put("/:id", (req,res) => {
    res.send("Update a movie")
});

// D-For Deleting movie
router.delete("/:id", (req,res) => {
    res.send("Delete a movie")
});

export default router;
