function sendTelegramMessage(botToken, chatId, message) {
  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  var params = {
    'chat_id': chatId,
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
