

document.addEventListener('DOMContentLoaded', function() {

    // alert("The scripts.js file is working");

    // Make the title fall
    // Select the title element
    const title = document.getElementById('title');
    
    // Add click event listener to the title
    title.addEventListener('click', function() {
        // Call the function to make the title fall
        fallTitle(title);
    });

    showRandomImage('https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIyMzY2OTkwMy9vcmlnaW5hbF80ZTc0YzI1YTQwNmY3ZWY4ODIyYjhlYWVlYzM0ZWE4Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo2MDAsImZpdCI6Imluc2lkZSIsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX0sIndlYnAiOnsicXVhbGl0eSI6NjV9LCJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjAzLCJnIjoyMDMsImIiOjIwM319LCJqcGVnIjp7InF1YWxpdHkiOjY1fSwicm90YXRlIjpudWxsfX0=');
    showRandomImage('https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI5ODQxNDAxL29yaWdpbmFsXzc5ZWY4NzY2NjU1MzI2NjQxMmYzODczMDg5MDQ0MDA0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjYwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo2NX0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyMDMsImciOjIwMywiYiI6MjAzfX0sImpwZWciOnsicXVhbGl0eSI6NjV9LCJyb3RhdGUiOm51bGx9fQ==');
    

    
});

// Functions

// Function to make the title fall letter by letter from right to left
function fallTitle(titleElement) {
    // Get all the letters in the title
    const letters = titleElement.textContent.split('');
    
    // Clear the title container
    titleElement.innerHTML = '';
    
    // Iterate through each letter
    letters.forEach((letter, index) => {
        // Create a span element for the letter
        const span = document.createElement('span');
        span.textContent = letter;
        
        // Add CSS styles for positioning
        span.style.position = 'relative';
        span.style.transition = `top ${(index + 1) * 0.1 + 1}s ease`;
        span.style.top = '0';
        
        // Append the letter to the title container
        titleElement.appendChild(span);
        
        // Delay to create a staggered effect
        setTimeout(() => {
            // Calculate the distance to fall
            const distanceToFall = window.innerHeight - span.getBoundingClientRect().top - span.offsetHeight;
            
            // Move the letter to the bottom of the screen
            span.style.top = `${distanceToFall}px`;
        }, 100 * (index + 1));
    });
}

// Place image of cookie in random places on the screen
function showRandomImage(imageSrc) {
    // Get the container element
    const container = document.getElementById('imageContainer');
    
    // Create an image element
    const image = document.createElement('img');
    
    // Set the source of the image
    image.src = imageSrc;
    
    // Set CSS styles for positioning
    image.style.position = 'absolute';
    image.style.width = '200px'; // Adjust the size as needed
    image.style.height = 'auto'; // Maintain aspect ratio
    image.style.left = Math.random() * (window.innerWidth - 200) + 'px'; // Adjust for image width
    image.style.top = Math.random() * (window.innerHeight - 200) + 'px'; // Adjust for image height
    
    // Append the image to the container
    container.appendChild(image);
    
    // Add click event listener to the image
    image.addEventListener('click', function() {
        // Reposition the image to a random place on the screen when clicked
        image.style.left = Math.random() * (window.innerWidth - 200) + 'px'; // Adjust for image width
        image.style.top = Math.random() * (window.innerHeight - 200) + 'px'; // Adjust for image height
    });
}



