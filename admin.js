document
    .getElementById("adminLoginForm")
    .addEventListener("submit", adminLogin);

async function adminLogin(event) {

    event.preventDefault();

    // Get values from form
    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    // Admin object
    const admin = {
        username: username,
        password: password
    };

    try {

        // Send request to deployed Spring Boot backend
        const response = await fetch(
            "https://royal-enfield-backend.onrender.com/admin/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(admin)
            }
        );

        // Get response from backend
        const message = await response.text();

        // Display result
        const messageElement =
            document.getElementById("message");

        if (message === "Login Successful") {

            messageElement.textContent =
                "Login Successful!";

            messageElement.style.color =
                "#28a745";

            // Redirect to Admin Dashboard
            setTimeout(() => {

                window.location.href =
                    "admin-dashboard.html";

            }, 1000);

        } else {

            messageElement.textContent =
                message;

            messageElement.style.color =
                "#dc3545";
        }

    } catch (error) {

        console.error(error);

        const messageElement =
            document.getElementById("message");

        messageElement.textContent =
            "Unable to connect to the server.";

        messageElement.style.color =
            "#dc3545";
    }
}
