require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./database/dbconnect");

const userRoute = require("./routes/userRoute");
const doctorRoute = require("./routes/doctorRoute");
const appointmentRouter = require("./routes/appointmentRouter");
const chatRoute = require("./routes/chat");

const app = express();   // ✅ FIRST create app

// ✅ Middleware
app.use(cors({
    origin: "https://medical-app-five-chi.vercel.app",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Connect DB
connectDB();

// Routes
app.use("/med", userRoute);
app.use("/doctor", doctorRoute);
app.use("/appointments", appointmentRouter);
app.use("/api/chat", chatRoute);

app.get("/", (req, res) => {
    res.send("Hello from Server");
});

// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});