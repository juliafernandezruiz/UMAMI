
$(document).ready(function () {
    // Enviar formulario
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const name = $('#name').val();
        const message = $('#message').val();
        
        if (email && phone && name && message) {
            alert(`Gracias por contactarnos, ${name}. Hemos recibido tu mensaje.`);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    // Suscribirse a la newsletter
    $('#subscribe-btn').on('click', function () {
        const email = $('#newsletter-email').val();
        if (email) {
            alert('Gracias por suscribirte a nuestro Newsletter.');
        } else {
            alert('Por favor, introduce tu email.');
        }
    });
});
