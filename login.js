document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

   
    const usuarioDemo = "usuario@ejemplo.com";
    const passDemo = "123456";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === usuarioDemo && password === passDemo) {
        window.location.href = "./index.html";
    } else {
        document.getElementById("error").innerText = "Email o contraseña incorrectos.";
    }
};