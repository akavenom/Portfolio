// You can add interactive features here
// For now, let's add an alert when a social link is clicked
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        alert(`You clicked on ${event.target.textContent}`);
    });
});
