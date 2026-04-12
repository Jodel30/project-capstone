const QRCode = require('qrcode');

let studentData = "LRN: 123456789012";

QRCode.toFile('student-qr.png', studentData, function (err) {
    if (err) throw err;
    console.log("QR Code created successfully!");
});