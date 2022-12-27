const express = require("express");
const connectDb = require("./db");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const ErrorHandler = require("./middleware/error");
dotenv.config({
  path: "config/.env",
});

// Hadling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    `Shutting down the server for Handling Uncaught Exception: ${err.message}`
  );
});

const allRoutes = require("./routes/index");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;
app.use(allRoutes);
app.use(ErrorHandler);

connectDb(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
    const server = app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });

    // Unhandled promise rejection
    process.on("unhandledRejection", (err) => {
      console.log(`Shutting down the server for ${err.message}`);
      console.log(
        `Shutting down the server due to unhandled promise rejection`
      );
      server.close(() => {
        process.exit(1);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
