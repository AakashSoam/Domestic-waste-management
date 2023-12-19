
// Use SweetAlert2 for nicer alerts
function schedulePickup() {
    Swal.fire({
        title: 'Schedule Pickup',
        html:
            '<label for="pickupDate">Select Pickup Date:</label>' +
            '<input type="date" id="pickupDate" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
            const pickupDate = document.getElementById('pickupDate').value;
            if (!pickupDate) {
                Swal.showValidationMessage('Please select a date');
            }
            return pickupDate;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const selectedDate = result.value;
            Swal.fire(
                'Success!',
                `Pickup scheduled for ${selectedDate}.`,
                'success'
            );
        }
    });
}// ... (previous code) ...

// Function to find the nearest garage (placeholder)
function findNearestGarage() {
    Swal.fire({
        title: 'Enter Your Address',
        html:
            '<label for="address">Address:</label>' +
            '<input type="text" id="address" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
            const userAddress = document.getElementById('address').value;
            if (!userAddress) {
                Swal.showValidationMessage('Please enter your address');
            }
            return userAddress;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const userAddress = result.value;

            // Placeholder logic to find nearest garage
            const nearestGarage = findNearestGarageFunction(userAddress);

            Swal.fire(
                'Nearest Garage',
                `The nearest garage for waste disposal is located at: ${nearestGarage}`,
                'info'
            );
        }
    });
}

// Placeholder function to find the nearest garage based on user address
function findNearestGarageFunction(address) {
    // Placeholder logic (you can replace this with your actual implementation)
    return '123 Ramnagar silvercity Meerut';
}

// ... (remaining code) ...



// Handle signup form submission
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('#signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!fullName || !email || !phone) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
        } else {
            // You can add further processing or send the data to a server here
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Thank you for signing up!',
            });

            // Clear form fields after successful signup
            signupForm.reset();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const guidelineItems = document.querySelectorAll('.guideline-item');

    guidelineItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedGuideline = item.textContent;
            alert(`Selected Guideline: ${selectedGuideline}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Contact Form Submission
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const contactName = document.getElementById('contactName').value;
        const contactEmail = document.getElementById('contactEmail').value;
        const contactMessage = document.getElementById('contactMessage').value;

        if (!contactName || !contactEmail || !contactMessage) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields for the contact form!',
            });
        } else {
            // You can add further processing or send the data to a server here
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Your message has been sent.',
            });

            // Clear form fields after successful submission
            contactForm.reset();
        }
    });

    // Complaint Form Submission
    const complaintForm = document.querySelector('#complaint-form');

    complaintForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const complaintName = document.getElementById('complaintName').value;
        const complaintEmail = document.getElementById('complaintEmail').value;
        const complaintDescription = document.getElementById('complaintDescription').value;

        if (!complaintName || !complaintEmail || !complaintDescription) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields for the complaint form!',
            });
        } else {
            // You can add further processing or send the data to a server here
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Your complaint has been submitted.',
            });

            // Clear form fields after successful submission
            complaintForm.reset();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const guidelineItems = document.querySelectorAll('.guideline-item');

    guidelineItems.forEach(item => {
        item.addEventListener('click', function () {
            // Toggle the visibility of additional information
            const additionalInfo = item.querySelector('.additional-info');
            additionalInfo.classList.toggle('visible');
        });
    });
});
function submitFeedback() {
    const name = document.getElementById('feedbackName').value;
    const message = document.getElementById('feedbackMessage').value;

    if (name && message) {
        // You can customize this part to send the feedback data to your server or perform any desired action
        Swal.fire({
            icon: 'success',
            title: 'Feedback Submitted!',
            text: 'Thank you for your feedback.',
            timer: 3000,
            showConfirmButton: false
        });

        // Clear the form after submission
        document.getElementById('feedbackForm').reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in both your name and feedback message.'
        });
    }
}

