// JavaScript code for handling chat interactions can be added here

document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    const chatContainer = document.querySelector('.chatbot-chat');

    // Display user message
    chatContainer.innerHTML += `<div class="user-message" align = "right" >${message}</div>`;
    
    // You can add logic here to handle responses from the chatbot
    
    // Clear the input field
    document.getElementById('message').value = '';
});


const button1 = document.getElementById("health-button");
const button2 = document.getElementById("education-button");
const button3 = document.getElementById("mhrd-button");

button1.addEventListener("click", function () {
    // Display the message when the button is clicked
    const chatContainer = document.querySelector('.chatbot-chat');
    const message = "I want to know about the health system in India.";
    
    // Display user message
    chatContainer.innerHTML += `<div class="user-message" align = "right" >${message}</div>`;
    
});
button2.addEventListener("click", function () {
    // Display the message when the button is clicked
    const chatContainer = document.querySelector('.chatbot-chat');
    const message = "I want to enquire about education.";
    
    // Display user message
    chatContainer.innerHTML += `<div class="user-message" align = "right" >${message}</div>`;
    
});
button3.addEventListener("click", function () {
    // Display the message when the button is clicked
    const chatContainer = document.querySelector('.chatbot-chat');
    const message = "Tell me about the number of hospitals in india.";
    
    // Display user message
    chatContainer.innerHTML += `<div class="user-message" align = "right" >${message}</div>`;
    
});

