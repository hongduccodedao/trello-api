import express from "express";

const app = express();

const hostname = "localhost";
const port = 5000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
