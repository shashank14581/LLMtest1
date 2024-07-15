async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    const response = await fetch('https://replit.com/@ShashankSingh81/LLMtest1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    responseElement.innerText = data.response;
}
