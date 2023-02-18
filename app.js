const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const apartmentsRouter = require("./routes/api/apartments");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "start";

app.use(cors());
app.use(express.json());
app.use(logger(formatLogger));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	console.log("first middleware");
	next();
});

app.use("/api/auth", authRouter);
app.use("/api/apartments", apartmentsRouter);

app.use((req, res) => {
	res.status(404).json({
		message: "No such directory",
	});
});
app.use((err, req, res, next) => {
	const { status = 500, message = "Internal Server Error" } = err;
	res.status(status).json({ message });
});

module.exports = app;
