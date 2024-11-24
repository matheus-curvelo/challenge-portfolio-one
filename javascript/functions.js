// EmailJS
emailjs.init('sKYtOpqTDPPSVEDH0'); // ID do EmailJS

document.querySelector('#contact form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Parâmetros do template EmailJS
    const templateParams = {
        from_name: formData.get('name'),
        to_name: 'Matheus',
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    emailjs
        .send('service_4jbxa25', 'template_7dggke2', templateParams)
        .then(function (response) {
            alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
            form.reset();
        })
        .catch(function (error) {
            alert('Ops, ocorreu um erro. Tente novamente mais tarde.');
            console.error('Erro:', error);
        });
});

// Inserindo ano no footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
