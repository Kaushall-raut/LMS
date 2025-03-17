require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const { authorization } = require("paypal-rest-sdk");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000; //!  IF port not present than take 5000 as a port number

const MONGO_URI = process.env.MONGO_URI;

const authRoutes = require("./routes/auth-routes/index");
const mediaRoutes = require("./routes/instructor-routes/media-routes");
const instructorCourseRoutes = require("./routes/instructor-routes/course-routes");
const studentViewCourseRoutes = require("./routes/student-routes/course-routes");
const studentViewOrderRoutes = require("./routes/student-routes/order-routes");
const studentCoursesRoutes = require("./routes/student-routes/student-courses-routes");
const studentCourseProgressRoutes = require("./routes/student-routes/course-progress-routes");


app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); //! Middleware

//! Database connection

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Db is now connected "))
  .catch((e) => console.log(" db connection Loss"));

app.listen(PORT, () => {
  //! without it your application will not be accessible over the network and your server will not start
  //! and also handle upcoming http Request
  console.log(`server is running on ${PORT}`);
});

//! triggering routes at particular end point to invoke the function

app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);
app.use("/instructor/course", instructorCourseRoutes);
app.use("/student/course", studentViewCourseRoutes);
app.use("/student/order", studentViewOrderRoutes);
app.use("/student/courses-bought", studentCoursesRoutes);
app.use("/student/course-progress", studentCourseProgressRoutes);