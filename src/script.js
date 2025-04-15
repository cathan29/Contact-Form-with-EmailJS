document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const initialMessage = document.getElementById('initial-message');

    // Initialize EmailJS
    emailjs.init('8yUHra6o73b05s8Jw'); // Replace with your EmailJS public key

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Send form data using EmailJS
        emailjs.sendForm('service_f8l9zk4', 'template_sgy1elc', form)
            .then(() => {
                // Hide the form and initial message, show the thank-you message
                thankYouMessage.style.display = 'block'; // Hide the initial message
                thankYouMessage.classList.remove('hidden'); // Show the thank-you message

                // Clear the form fields
                form.reset(); // Reset the form fields

                // Reset the interface after 3 seconds
                setTimeout(() => {
                    form.style.display = 'block'; // Show the form again
                    initialMessage.style.display = 'block'; // Show the initial message again
                    thankYouMessage.classList.add('hidden'); // Hide the thank-you message
                }, 3000); // 3000ms = 3 seconds
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send your message. Please try again later.');
            });
    });
});