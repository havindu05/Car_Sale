const emails = ["test@gmail.com", "admin@gmail.com", "havindu@gmail.com"];
    const passwords = ["1234", "admin123", "havindu@123"];

    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const messageBox = document.getElementById("message");

      let isMatch = false;

      for (let i = 0; i < emails.length; i++) {
        if (emails[i] === email && passwords[i] === password) {
          isMatch = true;
          break;
        }
      }

      if (isMatch) {
        messageBox.style.color = "limegreen";
        messageBox.textContent = "✅ Login Successful!";
      } else {
        messageBox.style.color = "red";
        messageBox.textContent = "❌ Invalid Email or Password!";
      }
    });