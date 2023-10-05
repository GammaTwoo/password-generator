const password = localStorage.getItem("password");

const passwordBox = document.getElementById('password')
passwordBox.setAttribute('placeholder', '')
passwordBox.value = password