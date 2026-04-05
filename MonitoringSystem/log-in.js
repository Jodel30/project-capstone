let selectedRole = "LGU Personnel";

function selectRole(button, role) {
    let buttons = document.querySelectorAll(".roles button");
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedRole = role;

    let info = {
        "LGU Personnel": "Monitor and generate reports",
        "Bus Driver": "Track student trips",
        "Administrators": "Manage system settings"
    };

    document.getElementById("roleInfo").innerHTML = `
        <div>👤</div>
        <div>
            <strong>${role}</strong><br>
            <small>${info[role]}</small>
        </div>
    `;

    document.getElementById("loginBtn").innerText = "Login as " + role;
}
function login() {
    if (selectedRole === "LGU Personnel") {
        window.location.href = "LguDashboard.html";
    } 
    else if (selectedRole === "Bus Driver") {
        window.location.href = "DriverDashboard.html";
    } 
    else if (selectedRole === "Administrators") {
        window.location.href = "AdminDashboard.html";
    }
}