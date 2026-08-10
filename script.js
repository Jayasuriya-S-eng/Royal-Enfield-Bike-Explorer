document.getElementById("bookingForm").addEventListener("submit", placeOrder);

async function placeOrder(event) {

    event.preventDefault();

    const booking = {

        name: document.getElementById("name").value,
        fatherName: document.getElementById("fatherName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,document.getElementById("bookingForm").addEventListener("submit", placeOrder);

async function placeOrder(event) {

    event.preventDefault();

    const booking = {

        name: document.getElementById("name").value,
        fatherName: document.getElementById("fatherName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,

        model: document.getElementById("model").value,
        color: document.getElementById("color").value,

        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
        showroom: document.getElementById("showroom").value,
        address: document.getElementById("address").value,

        payment: document.getElementById("payment").value,
        finance: document.getElementById("finance").value
    };

    try {

        const response = await fetch(
            "https://royal-enfield-backend.onrender.com/orders/place",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(booking)
            }
        );

        const message = await response.text();

        if (response.ok) {

            alert(message);

            document.getElementById("bookingForm").reset();

        } else {

            alert("Booking failed: " + message);
        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");
    }
}
        gender: document.getElementById("gender").value,

        model: document.getElementById("model").value,
        color: document.getElementById("color").value,

        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
        showroom: document.getElementById("showroom").value,
        address: document.getElementById("address").value,

        payment: document.getElementById("payment").value,
        finance: document.getElementById("finance").value
    };

    try {

        const response = await fetch(
            "http://localhost:8080/orders/place",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(booking)
            }
        );

        const message = await response.text();

        if (response.ok) {

            alert(message);

            document.getElementById("bookingForm").reset();

        } else {

            alert("Booking failed: " + message);
        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");
    }
}
