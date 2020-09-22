const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Routes
const reportRoutes = require("./routes/api/reports");

// BodyParser and Cors Middleware
app.use(cors());
app.use(express.json());

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to test API for jsreport",
  });
});

// Connect to MongoDB
// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("MongoDB connected!"))
//   .catch((err) => console.log(`Error to connected: ${err.message}`));

// Use Routes
app.use("/api/report", reportRoutes);

// Listen Port
app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
