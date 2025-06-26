 // Espera a que el documento HTML esté completamente cargado
        document.addEventListener('DOMContentLoaded', function() {
            // Obtiene referencias a los elementos del formulario y los botones
            const loginForm = document.getElementById('loginForm');
            const confirmarBtn = document.getElementById('confirmarBtn');
            const registrarBtn = document.getElementById('registrarBtn');
            const usuarioInput = document.getElementById('usuario');
            const contrasenaInput = document.getElementById('contrasena');
            const recuperarContrasenaLink = document.querySelector('.forgot-password');
            const passwordRecoveryModal = document.getElementById('passwordRecoveryModal');
            const closeButton = document.querySelector('.close-button');
            const sendRecoveryEmailButton = document.getElementById('sendRecoveryEmail');
            const emailInput = document.getElementById('email');
            const recoveryMessageDiv = document.getElementById('recoveryMessage');

            // Agrega un listener para el evento 'click' del botón 'Confirmar'
            confirmarBtn.addEventListener('click', function(event) {
                event.preventDefault(); // Evita la recarga de la página al hacer clic en "submit"
                const usuario = usuarioInput.value; // Obtiene el valor del campo de usuario
                const contrasena = contrasenaInput.value; // Obtiene el valor del campo de contraseña
                console.log('Intento de inicio de sesión con:', { usuario, contrasena }); // Muestra en la consola los datos de inicio de sesión
                alert(`Se intentó iniciar sesión con el usuario: ${usuario}`); // Muestra una alerta (simulación)
                // Aquí iría la lógica real para enviar los datos de inicio de sesión al servidor.
            });

            // Agrega un listener para el evento 'click' del botón 'Registrarse'
            registrarBtn.addEventListener('click', function() {
                console.log('Botón Registrarse clickeado.'); // Muestra en la consola que se hizo clic en el botón
                alert('Redirigiendo a la página de registro (funcionalidad no implementada).'); // Muestra una alerta (simulación)
                // Aquí iría la lógica real para redirigir a la página de registro.
            });

            // Agrega un listener para el evento 'click' del enlace 'Recuperar Contraseña'
            recuperarContrasenaLink.addEventListener('click', function(event) {
                event.preventDefault(); // Evita la navegación predeterminada del enlace '#'
                passwordRecoveryModal.style.display = "block"; // Muestra el modal de recuperación de contraseña
            });

            // Agrega un listener para el evento 'click' del botón de cerrar el modal
            closeButton.addEventListener('click', function() {
                passwordRecoveryModal.style.display = "none"; // Oculta el modal
                recoveryMessageDiv.textContent = ''; // Limpia cualquier mensaje previo en el modal
                emailInput.value = ''; // Limpia el campo de correo electrónico del modal
            });

            // Agrega un listener para el evento 'click' en la ventana (para cerrar el modal al hacer clic fuera de él)
            window.addEventListener('click', function(event) {
                if (event.target == passwordRecoveryModal) { // Si el objetivo del clic es el modal
                    passwordRecoveryModal.style.display = "none"; // Oculta el modal
                    recoveryMessageDiv.textContent = ''; // Limpia cualquier mensaje previo
                    emailInput.value = ''; // Limpia el campo de correo electrónico
                }
            });

            // Agrega un listener para el evento 'click' del botón 'Enviar Enlace de Restablecimiento' en el modal
            sendRecoveryEmailButton.addEventListener('click', function() {
                const email = emailInput.value; // Obtiene el valor del campo de correo electrónico del modal
                if (email) {
                    console.log('Solicitud de restablecimiento de contraseña para:', email); // Muestra en la consola el correo electrónico ingresado
                    recoveryMessageDiv.textContent = `Se ha enviado un enlace de restablecimiento a: ${email} (funcionalidad no implementada).`; // Muestra un mensaje (simulación)
                    recoveryMessageDiv.style.color = 'green'; // Establece el color del mensaje a verde
                    // Aquí iría la lógica real para enviar un correo electrónico de restablecimiento al servidor.
                } else {
                    recoveryMessageDiv.textContent = 'Por favor, introduce tu correo electrónico.'; // Muestra un mensaje de error si el campo está vacío
                    recoveryMessageDiv.style.color = 'red'; // Establece el color del mensaje a rojo
                }
            });
        });