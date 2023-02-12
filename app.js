const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST } = process.env;

mongoose
	.connect(DB_HOST)
	.then(() => {
		console.log("Database connect success");
	})
	.catch((error) => console.log(error.message));
mongoose.set("strictQuery", true);

const booksRouter = require("./routes/api/books");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const formatLogger = app.get("env") === "development" ? "dev" : "start";
app.use(logger(formatLogger));
app.use((req, res, next) => {
	console.log("first middleware");
	next();
});

app.use("/api/books", booksRouter);

app.use((req, res) => {
	res.status(404).json({
		message: "No such directory",
	});
});
app.use((err, req, res, next) => {
	const { status = 500, message = "Internal Server Error" } = err;
	res.status(status).json({ message });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
