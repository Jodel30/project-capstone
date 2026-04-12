const navLinks = document.querySelectorAll(".top-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // remove active from all
        navLinks.forEach(l => l.classList.remove("active"));

        // add active to clicked
        this.classList.add("active");
    });
});

document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lrn = document.getElementById("lrn").value;
    const grade = document.getElementById("grade").value;
    const section = document.getElementById("section").value;
    const address = document.getElementById("address").value;

    const studentData = `LRN:${lrn} , Name:${name} , Grade:${grade} , Section:${section} , Address:${address}`;

    document.getElementById("qrcode").innerHTML = "";

    QRCode.toCanvas(studentData, function (err, canvas) {
        if (err) {
            console.error(err);
            return;
        }
        document.getElementById("qrcode").appendChild(canvas);
    });
});
