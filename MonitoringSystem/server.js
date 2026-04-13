const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jodel0987",
    database: "studentdb"
});

// API to save student
app.post("/register", (req, res) => {
    const { name, lrn, grade, section, address } = req.body;

    const qrData = lrn; // unique QR

    const sql = "INSERT INTO students (name, lrn, grade, section, address, qr_data) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [name, lrn, grade, section, address, qrData], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error saving data");
        }
        res.send("Student registered successfully");
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});