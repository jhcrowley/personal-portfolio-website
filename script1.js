document.addEventListener('DOMContentLoaded', () => {
    // Animate gallery images
    const images = document.querySelectorAll('.gallery-img');
    let delay = 0;
    images.forEach(img => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }, delay);
        delay += 500; // Delay in ms between each image animation
    });

    // Checkbox functionality
    const yesCheckbox = document.getElementById('yesCheckbox');
    const noCheckbox = document.getElementById('noCheckbox');

    yesCheckbox.addEventListener('change', () => {
        if(yesCheckbox.checked) {
            alert('Yay! Happy Valentine\'s Day!');
            // Optionally, redirect to another page or show more content
        }
    });

    noCheckbox.addEventListener('click', (e) => {
        e.preventDefault();
        const noLabelSpan = document.querySelector('#noCheckbox + span'); // Selects the span next to the noCheckbox
        noLabelSpan.style.animation = 'wiggle 0.5s ease-in-out';
        setTimeout(() => {
            noLabelSpan.style.animation = '';
        }, 500); // Remove the animation so it can be triggered again
        alert('Oh no! You cannot say no on Valentine\'s Day!');
    });
});
