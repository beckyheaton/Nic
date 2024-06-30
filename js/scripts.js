function submitDrawing() {
    const drawing = document.getElementById('history-drawing').value;
    if (drawing.trim() === '') {
        alert('Please describe your vision of history.');
    } else {
        alert('Thank you for your submission!');
    }
}
