CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    lrn VARCHAR(50) UNIQUE,
    grade VARCHAR(20),
    section VARCHAR(20),
    address TEXT,
    qr_data TEXT
);