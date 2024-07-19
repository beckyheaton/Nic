function positionKites(kites) {
    kites.forEach(kite => {
        kite.style.top = Math.random() * window.innerHeight + 'px';
        kite.style.left = Math.random() * window.innerWidth + 'px';
    });
}

function animateKite(kite) {
    kite.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5s and 10s
    kite.style.animationTimingFunction = 'ease-in-out';
    kite.style.animationDelay = (Math.random() * 5) + 's'; // Random delay up to 5 seconds
}

function animateKites(kites) {
    kites.forEach(kite => {
        animateKite(kite);
    });
}

let isQuicklyMoving = false;

function updateTitle() {
    const titleElement = document.getElementById('title');
    let currentText = titleElement.innerText;
    if (currentText.length < 8) { // "Kites!!!" is 8 characters
        titleElement.innerText = currentText + '!';
    } else {
        toggleQuickMovement();
    }
}

function moveKitesQuickly() {
    const kites = document.querySelectorAll('.kite');
    kites.forEach(kite => {
        kite.style.animation = 'quickFloat 2s infinite linear';
        kite.style.animationDelay = (Math.random() * 2) + 's'; // Random delay up to 2 seconds
    });
}

function resetKiteAnimation() {
    const kites = document.querySelectorAll('.kite');
    kites.forEach(kite => {
        kite.style.animation = 'float 10s infinite linear';
        kite.style.animationDelay = (Math.random() * 5) + 's'; // Random delay up to 5 seconds
    });
}

function toggleQuickMovement() {
    if (isQuicklyMoving) {
        resetKiteAnimation();
        isQuicklyMoving = false;
    } else {
        moveKitesQuickly();
        isQuicklyMoving = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const kites = document.querySelectorAll('.kite');
    positionKites(kites);
    animateKites(kites);

    const titleElement = document.getElementById('title');
    titleElement.addEventListener('click', updateTitle);

    const whooshSound = document.getElementById('whoosh-sound');
    kites.forEach(kite => {
        kite.addEventListener('mouseenter', () => {
            whooshSound.currentTime = 0; // Rewind to the start
            whooshSound.play();
        });

        kite.addEventListener('mouseleave', () => {
            whooshSound.pause(); // Pause the sound
        });
    });

    const atmosKiteSound = document.getElementById('atmos-kite-sound');
    let isAtmosKiteMuted = true;

    // Play the audio initially but muted
    atmosKiteSound.play().catch(error => {
        console.log('Autoplay prevented:', error);
    });
    atmosKiteSound.muted = true;

    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', (event) => {
        console.log('Clicked element:', event.target); // Log the clicked element

        console.log('Background clicked'); // Log when background is clicked
        if (isAtmosKiteMuted) {
            atmosKiteSound.muted = false;
        } else {
            atmosKiteSound.muted = true;
        }
        isAtmosKiteMuted = !isAtmosKiteMuted;
    });
});
