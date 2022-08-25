const btn = document.querySelector("#entrar");
btn.addEventListener("click", function(){
    location.replace("signin.html")
});

const btnCriar = document.querySelector ("#criar");

var email = document.querySelector("#email");
var labelEmail = document.querySelector("#labelEmail");
var validEmail = false;

var confEmail = document.querySelector("#confEmail");
var labelConfEmail = document.querySelector("#labelConfEmail");
var validConfEmail = false;

var senha = document.querySelector("#senha");
var labelSenha = document.querySelector("#labelSenha");
var validSenha = false;

var confSenha = document.querySelector("#confSenha");
var labelConfSenha = document.querySelector("#labelConfSenha");
var validConfSenha = false;

var nome = document.querySelector("#nome");
var labelNome = document.querySelector("#labelNome");
var validNome = false;

var msgError = document.querySelector ("#msgError");
var msgSucess = document.querySelector ("#msgSucess");

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 1) {
        labelNome.setAttribute('style', 'color: red')
        validNome = false;
    }
    else {
        labelNome.setAttribute('style', 'color: green')
        validNome = true;
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 5) {
        labelEmail.setAttribute('style', 'color: red')
        validEmail = false;
    }
    else {
        labelEmail.setAttribute('style', 'color: green')
        validEmail = true;
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        validSenha = false;
    }
    else {
        labelSenha.setAttribute('style', 'color: green')
        validSenha = true;
    }
})

confSenha.addEventListener('keyup', () => {
    if (senha.value != confSenha.value) {
        confSenha.setAttribute('style', 'color: red')
        validConfSenha = false;
    }
    else {
        confSenha.setAttribute('style', 'color: green')
        validConfSenha = true;
    }
})

confEmail.addEventListener('keyup', () => {
    if (email.value != confEmail.value) {
        confEmail.setAttribute('style', 'color: red')
        validConfEmail = false;
    }
    else {
        confEmail.setAttribute('style', 'color: green')
        validConfEmail = true;
    }
})


const btn2 = document.querySelector("#criar");
btn2.addEventListener("click", function(e){
    e.preventDefault();
    if (validConfEmail && validConfSenha && validEmail && validNome && validSenha){
        var listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

        listaUsuario.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                senhaCad: senha.value,
    
            }
        )
        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))


        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute ('style', 'display: none')

        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 2000)
        
    }
    else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '*Preencha todos os campos corretamente.'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute ('style', 'display: none')
    }

});




const btnDark = document.getElementById ("btn");

btnDark.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})

