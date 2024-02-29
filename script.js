document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            squares.forEach(otherSquare => {
                if (otherSquare !== square) {
                    otherSquare.style.backgroundColor = '#6F4E37'; // Change color to Coffee
                }
            });
        });

        square.addEventListener('mouseout', function() {
            squares.forEach(otherSquare => {
                otherSquare.style.backgroundColor = '#E6E6FA'; // Change color back to Lavender
            });
        });
    });
});
