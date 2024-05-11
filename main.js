import express from "express";
import movieRoutes from "./routes/movies.route.js";
const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!" });
});

// CRUD Functionallity of movies

// CLINT -> MIDDLE WARE ->SERVER

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The Server is running at http://localhost:${PORT}`);
});

// DRY Principle don't use same value more than one time instent create var
