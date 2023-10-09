document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("adminLoginForm");
    const passwordInput = document.getElementById("password");
    const errorAlert = document.getElementById("errorAlert");
    const successAlert = document.getElementById("successAlert");
    const dashboard = document.getElementById("dashboard");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const enteredPassword = passwordInput.value;
        // Replace 'your_password' with the actual password
        if (enteredPassword === "your_password") {
            errorAlert.style.display = "none";
            successAlert.style.display = "block";
            setTimeout(function() {
                dashboard.style.display = "block";
                loginForm.style.display = "none";
            }, 1500); // Redirect to the dashboard after 1.5 seconds
        } else {
            errorAlert.style.display = "block";
            successAlert.style.display = "none";
        }
    });
});
