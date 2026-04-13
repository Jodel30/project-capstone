const navLinks = document.querySelectorAll(".top-nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // remove active from all
        navLinks.forEach(l => l.classList.remove("active"));

        // add active to clicked
        this.classList.add("active");
    });
});

document.getElementById("studentForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lrn = document.getElementById("lrn").value;
    const grade = document.getElementById("grade").value;
    const section = document.getElementById("section").value;
    const address = document.getElementById("address").value;

    try {
        // SEND DATA TO SERVER
        const res = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, lrn, grade, section, address })
        });

        const data = await res.text();
        alert(data);
        
         document.getElementById("studentForm").reset();
        // CLEAR QR CODE AREA
        const qrContainer = document.getElementById("qrcode");
        qrContainer.innerHTML = "";
        
        // GENERATE QR CODE (fix: use QRCode.toCanvas correctly)
        QRCode.toCanvas(lrn, function (err, canvas) {
            if (err) {
                console.error(err);
                return;
            }
            qrContainer.appendChild(canvas);
        });

    } catch (err) {
        console.error(err);
        alert("Error connecting to server");
    }
});
