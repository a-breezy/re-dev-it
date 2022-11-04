const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
	{
		host: "127.0.0.1",
		user: "root",
		password: "",
		database: "election",
	},
	console.log("Connected to election database")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
	console.log(err);
	console.log(rows);
});

app.use((req, res) => {
	res.status(404).end();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
