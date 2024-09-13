
var typed= new Typed(".multiple-text",{
    strings: ["FrontEnd Developer ", "Backend Developer" , "Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop:true

})
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
           
            message: formData.get('message')
        };

        emailjs.send('service_qtutt2b', 'template_aq1q3nb', data, 'noJed1yyXhc1LptIk')
            .then(function (response) {
                responseMessage.textContent = 'Your message has been sent successfully!';
                responseMessage.style.color = 'green';
                form.reset();
            }, function (error) {
                responseMessage.textContent = 'There was an error sending your message.';
                responseMessage.style.color = 'red';
            });
    });
});
