// Initialize Flatpickr on the input fields
flatpickr("#checkin", {
    dateFormat: "Y-m-d",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        const checkoutInput = document.getElementById("checkout");
        checkoutInput._flatpickr.set("minDate", dateStr); // Set the minimum check-out date to the selected check-in date
    }
});

flatpickr("#checkout", {
    dateFormat: "Y-m-d",
    minDate: "today"
});

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email').value;
    if (!emailInput.endsWith('@gmail.com')) {
        alert('Email must be a Gmail address ending with @gmail.com');
        event.preventDefault(); // Prevent form submission
    }
});
