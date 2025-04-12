$(document).ready(function() {
    // Simulate verification process
    setTimeout(function() {
        $('#verification-container').fadeOut(function() {
            $('#login-container').fadeIn();
        });
    }, 2000);

    $('#register-btn').click(function() {
        $('#login-container').fadeOut(function() {
            $('#register-container').fadeIn();
        });
    });

    $('#register-form').submit(function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para registrar al usuario
        alert('Registro exitoso');
        $('#register-container').fadeOut(function() {
            $('#dashboard').fadeIn();
            $('#user-name').text('Bienvenido, ' + $('#register-username').val());
        });
    });

    $('#login-form').submit(function(event) {
        event.preventDefault();
        const username = $('#login-username').val();
        const password = $('#login-password').val();
        if (username === 'admin' && password === 'useroot') {
            $('#admin-panel').show();
        }
        $('#login-container').fadeOut(function() {
            $('#dashboard').fadeIn();
            $('#user-name').text('Bienvenido, ' + username);
        });
    });

    $('#add-domain').click(function() {
        alert('Add Domain with Protection');
        // Aquí puedes agregar la lógica para redirigir a los planes
    });

    $('#add-server-btn').click(function() {
        const domain = $('#server-domain').val();
        if (domain) {
            $('#server-controls').fadeIn();
        }
    });

    $('#server-on-btn').click(function() {
        $(this).css('background-color', 'green');
        $('#server-off-btn').css('background-color', '');
    });

    $('#server-off-btn').click(function() {
        $(this).css('background-color', 'red');
        $('#server-on-btn').css('background-color', '');
    });
});
