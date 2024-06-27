// function sendEmail() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('message', message);

//     fetch('send_email.php', {
//         method: 'POST',
//         body: formData
//     }).then(response => {
//         if (response.ok) {
//             alert('Message sent successfully');
//         } else {
//             alert('Failed to send message');
//         }
//     }).catch(error => {
//         console.error('Error:', error);
//     });
// }

// function reset() {
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('message').value = '';
// }

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     sendEmail();
//     reset();
// });