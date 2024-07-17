// Cache at least one element using selectElementById. 



// Cache at least one element using querySelector or querySelectorAll. 

// Use the parent-child-sibling relationship to navigate between elements at least once
// (firstChild, lastChild, parentNode, nextElementSibling, etc.). 

// Iterate over a collection of elements to accomplish some task. 

// Create at least one element using createElement. 

// Use appendChild and/or prepend to add new elements to the DOM. 

// Use the DocumentFragment interface or HTML templating with the cloneNode method to
// create templated content. 

// Modify the HTML or text content of at least one element in response to user interaction using
// innerHTML, innerText, or textContent.

// Modify the style and/or CSS classes of an element in response to user interactions using the
// style or classList properties. 

// Modify at least one attribute of an element in response to user interaction. 

// Register at least two different event listeners and create the associated event handler
// functions. 

// Use at least two Browser Object Model (BOM) properties or methods.

// Include at least one form and/or input with HTML attribute validation. 

// Include at least one form and/or input with DOM event-based validation. (This can be the
// same form or input as the one above, but should include event-based validation in addition to
// the HTML attribute validation.)

// Ensure that the program runs without errors (comment out things that do not work, and
// explain your blockers - you can still receive partial credit). 1

// Commit frequently to the git repository.

// Include a README file that contains a description of your application.

// Level of effort displayed in creativity, presentation, and user experience.


// 1. Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
const topMenuEl = document.querySelector('#topMenuEl');
const topMenuLinks = topMenuEl.querySelectorAll('a');
// 2. Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
// Call the event object's preventDefault() method
event.preventDefault();
// Immediately return if the element clicked was not an <a> element
if (event.target.tagName !== 'A') {
 return;
}
// Add the active class to the <a> element that was clicked, unless it was already active
if (event.target.classList.contains('active')) {
 event.target.classList.remove('active');
} else {
 event.target.classList.add('active');
}
// Remove the active class from each other <a> element in topMenuLinks
topMenuLinks.forEach(link => {
 if (link !== event.target) {
     link.classList.remove('active');
 }
});
// Log the content of the <a> element to verify the handler is working
console.log(event.target.textContent);
});

// delegated 'click' event listener to subMenuEl
document.querySelector('#subMenuEl').addEventListener('click', function(event) {
event.preventDefault();
// return if the element clicked was not an <a> element
if (event.target.tagName !== 'A') {
 return;
}
// Log the content of the <a> to verify the handler is working
console.log(event.target.textContent);
// Set the CSS top property of subMenuEl to 0
event.currentTarget.style.top = '0';
// Remove the active class from each <a> element in topMenuLinks
topMenuLinks.forEach(link => {
 link.classList.remove('active');
});
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl
const mainEl = document.querySelector('#mainEl');
mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
// If the ABOUT link is clicked, an <h1>About</h1> should be displayed
if (event.target.textContent === 'ABOUT') {
 mainEl.innerHTML = '<h1>About</h1>';
}
});



















