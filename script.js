//your JS code here. If required.
// Get the squares
const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');

// Add mouseover event listeners to each square
square1.addEventListener('mouseover', handleMouseOver);
square2.addEventListener('mouseover', handleMouseOver);
square3.addEventListener('mouseover', handleMouseOver);

// Function to handle mouseover event
function handleMouseOver(event) {
  // Change the background color of the squares
  square1.style.backgroundColor = event.target.id === 'square1' ? '#E6E6FA' : '#6F4E37';
  square2.style.backgroundColor = event.target.id === 'square2' ? '#E6E6FA' : '#6F4E37';
  square3.style.backgroundColor = event.target.id === 'square3' ? '#E6E6FA' : '#6F4E37';
}
