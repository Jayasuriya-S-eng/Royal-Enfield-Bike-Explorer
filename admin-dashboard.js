document.addEventListener(
    "DOMContentLoaded",
    loadBookings
);


// ===========================
// Refresh Button
// ===========================

document
    .getElementById("refreshBtn")
    .addEventListener(
        "click",
        loadBookings
    );


// ===========================
// Logout Button
// ===========================

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        logout
    );


// ===========================
// Load All Bookings
// ===========================

async function loadBookings() {

    const tableBody =
        document.getElementById(
            "bookingTableBody"
        );

    const loadingMessage =
        document.getElementById(
            "loadingMessage"
        );


    try {

        loadingMessage.textContent =
            "Loading bookings...";


        const response = await fetch(
            "http://localhost:8080/admin/bookings"
        );


        if (!response.ok) {

            throw new Error(
                "Failed to load bookings"
            );

        }


        const bookings =
            await response.json();


        // Clear old rows

        tableBody.innerHTML = "";


        // Total bookings

        document.getElementById(
            "totalBookings"
        ).textContent =
            bookings.length;


        // No bookings

        if (bookings.length === 0) {

            loadingMessage.textContent =
                "No bookings found.";

            return;
        }


        loadingMessage.textContent = "";


        // Display bookings

        bookings.forEach(function (booking) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${booking.id}
                </td>

                <td>
                    ${booking.name}
                </td>

                <td>
                    ${booking.fatherName}
                </td>

                <td>
                    ${booking.email}
                </td>

                <td>
                    ${booking.phone}
                </td>

                <td>
                    ${booking.dob}
                </td>

                <td>
                    ${booking.gender}
                </td>

                <td>
                    ${booking.model}
                </td>

                <td>
                    ${booking.color}
                </td>

                <td>
                    ${booking.state}
                </td>

                <td>
                    ${booking.city}
                </td>

                <td>
                    ${booking.pincode}
                </td>

                <td>
                    ${booking.showroom}
                </td>

                <td>
                    ${booking.address}
                </td>

                <td>
                    ${booking.payment}
                </td>

                <td>
                    ${booking.finance}
                </td>

                <td>

                    <button
                        class="delete-btn"
                        onclick="deleteBooking(${booking.id})">

                        Delete

                    </button>

                </td>

            `;


            tableBody.appendChild(row);

        });


    } catch (error) {

        console.error(error);


        loadingMessage.textContent =
            "Unable to load bookings.";

    }

}


// ===========================
// Delete Booking
// ===========================

async function deleteBooking(id) {

    const confirmation =
        confirm(
            "Are you sure you want to delete this booking?"
        );


    if (!confirmation) {

        return;

    }


    try {

        const response =
            await fetch(
                `http://localhost:8080/admin/bookings/${id}`,
                {
                    method: "DELETE"
                }
            );


        const message =
            await response.text();


        alert(message);


        // Reload table

        loadBookings();


    } catch (error) {

        console.error(error);


        alert(
            "Unable to delete booking."
        );

    }

}


// ===========================
// Logout
// ===========================

function logout() {

    window.location.href =
        "admin.html";

}