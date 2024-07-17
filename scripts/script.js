

// Cache elements using getElementById and querySelector

const contactForm = document.getElementById("contactForm");
const messageContainer = document.getElementById('messageContainer');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submittedName = document.querySelector('#submittedName');
const submittedEmail = document.querySelector('#submittedEmail');
const submittedMessage = document.querySelector('#submittedMessage');

// Event listener for form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please input all required fields!');
        return;
    }

    // Update the DOM with submitted information
    submittedName.innerText = `Name: ${nameInput.value}`;
    submittedEmail.innerText = `Email: ${emailInput.value}`;
    submittedMessage.innerText = `Message: ${messageInput.value}`;

    // Show the message container
    messageContainer.classList.remove('hidden');

    // Modify style and attributes
    messageContainer.style.border = '1px solid #000';
    nameInput.setAttribute('readonly', true);
    emailInput.setAttribute('readonly', true);
    messageInput.setAttribute('readonly', true);

    // Clear the form
    contactForm.reset();
});

// Iterate over elements and modify content
const labels = document.getElementById("contactForm").firstChild.nodeValue;
labels.forEach(label => {
    label.style.fontWeight = 'bold';
});

// Extra credit BOM attempt
window.alert('Welcome to our contact form.');
console.log('This form is ready for input!');

console.log(contactForm);



// document.querySelectorAll('label');










