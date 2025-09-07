document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            form.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');

            let valid = true;

            //Validar email
            const email = form.querySelector('input[type="email"]');
            if (email && !email.value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
                valid = false;
                showError(email, 'Por favor, ingresa un correo válido.');
            }

            //Validar contraseña
            const password = form.querySelector('input[type="password"]');
            if (password && password.value.length < 6) {
                valid = false;
                showError(password, 'La contraseña debe tener al menos 6 caracteres.');
            }

            // Puedes agregar más validaciones

            if (!valid) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
    });

    // Función para mostrar error en contexto
    function showError(input, message) {
        let feedback = input.parentElement.querySelector('.invalid-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            input.parentElement.appendChild(feedback);
        }
        feedback.textContent = message;
        input.classList.add('is-invalid');
    }
});