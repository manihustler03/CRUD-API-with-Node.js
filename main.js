import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
const app = express();
const PORT = 6969;

// Data understanding Middlewares

app.use(express.json())

app.use(express.urlencoded())

// connect DB

connectDB();


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
