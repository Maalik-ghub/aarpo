
document.querySelector(".submit-but").addEventListener("click", ()=> {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: document.querySelector(".login-code").value })
      })
      .then(response => response.text())
      .then(data => window.location.href = `/home?uid=${data}`)
      .catch(error => console.error('Error:', error));
})
