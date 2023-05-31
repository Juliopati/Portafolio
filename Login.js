const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.querySelector('#username').value;
  const password = form.querySelector('#password').value;

  // Aquí enviarías las credenciales del usuario a un servidor para verificarlas
  // y recibirías una respuesta en formato JSON con información sobre el usuario
  // y un token de sesión, si las credenciales son válidas.

  // Por ahora, supongamos que las credenciales son válidas y el servidor nos envía
  // una respuesta como esta:

  const response = {
    success: true,
    user: {
      id: 123,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    token: 'abc123',
  };

  // Si las credenciales son válidas, redirigimos al usuario a la página de inicio
  // de sesión exitoso.

  if (response.success) {
    window.location.href='index.html';
  }
});
