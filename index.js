const express = require("express"),
	app = express(),
	morgan = require("morgan"),
	bodyParser = require("body-parser"),
	path = require("path");

// Logger
app.use(morgan("tiny"));

//
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Router

// Routing

app.use((request, response, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, request, response) => {
	response.status(error.status || 500).json({
		error: {
			status: error.status || 500,
			message: error.message || "Internal Server Error",
		},
	});
});

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server Running on Port ${PORT}`);
});