const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

let chatMessages = [];

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Simulate asynchronous fetch request
    setTimeout(() => {
        const botResponse = `Bot: You said "${message}"`;
        addMessage('user', message);
        addMessage('bot', botResponse);
        userInput.value = '';
    }, 500); // Simulating delay
}

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.className = `message-${sender}`;
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}
