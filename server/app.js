import dotenv from "dotenv";
dotenv.config();

// imports
import express from "express";

// file imports
import connectToDB from "./config/dbConnection.js";
import userRoutes from './routes/user.routes.js'
 
// setting the app
const app = express();
const PORT = process.env.PORT || 4000;



// database connection
connectToDB();

// inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use('/api/user', userRoutes)


// spin up the server
app.listen(PORT, () => {
  console.log(`Server up at `, PORT);
});
