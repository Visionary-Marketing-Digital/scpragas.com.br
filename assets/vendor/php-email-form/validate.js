/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if (!action) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);

      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                });
            } catch(error) {
              displayError(thisForm, error);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!');
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');

      if (data.success === "true") {
        const sentMsg = thisForm.querySelector('.sent-message');
        sentMsg.classList.add('d-block');
        thisForm.reset();

        // Mensagem de sucesso desaparece após 5 segundos
        setTimeout(() => {
          sentMsg.classList.remove('d-block');
        }, 5000);
      } else {
        throw new Error('O envio falhou. Tente novamente.');
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    const errorMsg = thisForm.querySelector('.error-message');
    thisForm.querySelector('.loading').classList.remove('d-block');
    errorMsg.innerHTML = error;
    errorMsg.classList.add('d-block');

    // Mensagem de erro desaparece após 5 segundos
    setTimeout(() => {
      errorMsg.classList.remove('d-block');
    }, 5000);
  }

})();
