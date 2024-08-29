document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const name = document.getElementById('patientName').value.trim();
    const email = document.getElementById('patientEmail').value.trim();
    const phone = document.getElementById('patientPhone').value.trim();
    const address = document.getElementById('patientAddress').value.trim();
    const department = document.getElementById('department').value;

    if (!name || !email || !phone || !address || !department) {
        alert('Please fill out all fields.');
        event.preventDefault();
        return;
    }
    
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    // Simple phone number validation (example: 123-456-7890)
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (format: 123-456-7890).');
        event.preventDefault();
        return;
    }
});
