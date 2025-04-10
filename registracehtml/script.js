document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const eyeIcon = this.querySelector('.eye-icon');
            const eyeSlashIcon = this.querySelector('.eye-slash-icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.style.display = 'none';
                eyeSlashIcon.style.display = 'block';
                this.setAttribute('aria-label', 'Skrýt heslo');
            } else {
                input.type = 'password';
                eyeIcon.style.display = 'block';
                eyeSlashIcon.style.display = 'none';
                this.setAttribute('aria-label', 'Zobrazit heslo');
            }
        });
    });

    
    const form = document.getElementById('registraceForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Formulář je platný, lze odeslat!');
        });
    }
});
   
    const form = document.getElementById('registraceForm');
    const captchaError = document.getElementById('captcha-error');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
     
        captchaError.style.display = 'none';

        const response = grecaptcha.getResponse();
        if (response.length === 0) {
            captchaError.textContent = 'Prosím, potvrďte že nejste robot';
            captchaError.style.display = 'block';
            return false;
        }
        
        
        alert('Formulář je platný, lze odeslat!');
        
    });
