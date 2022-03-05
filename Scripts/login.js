const init = () =>{
    const validateEmail = (event) =>{
        const input = event.currentTarget;
        const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            btnButton.setAttribute('disabled','disabled');
            input.nextElementSibling.classList.add('error'); 
        } else{                                                 
            btnButton.setAttribute('disabled');
            input.nextElementSibling.classList.remove('error');

        }
    }

    const validatePassword = (event) =>{
        const input = event.currentTarget;

        if(input.value.length <8){
            btnButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        }else{
            btnButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }

    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const btnButton = document.querySelector('.btn-login');

    inputEmail.addEventListener('input',validateEmail);
    inputPassword.addEventListener  ('input',validatePassword)

    const errorHandler = () =>{
        btnButton.classList.remove('success');
        btnButton.classList.add('error'); 
        btnButton.textContent = "Error :(" 
    }

    const sucesshandler = () =>{
        btnButton.classList.remove('error');
        btnButton.classList.add('sucess');
        btnButton.textContent = "conectado";
        if (sucesshandler) window.location.href = 'Autenticado.html'
    }


    if(btnButton) {
        btnButton.addEventListener('click', (event) => {
            event.preventDefault();  

            btnButton.textContent = "...Loading";
            
            fetch('https://reqres.in/api/login',{  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({    
                    email: inputEmail.value,
                    password: inputPassword.value,
                }) /*usuario: eve.holt@reqres.in / senha: cityslicka*/
            }).then((Response) => {
                if (Response.status !==200){
                    return errorHandler();
                }
                sucesshandler();
            }).catch(() => {
                errorHandler();
            
            })
        })
    }
}

window.onload = init;