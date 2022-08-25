const btn = document.querySelector("#criar");
btn.addEventListener("click", function(){
    location.replace("index.html")
});

const btnDark = document.getElementById ("btn");

btnDark.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})

const btn2 = document.querySelector("#entrar");
btn2.addEventListener("click", function(e){
    e.preventDefault();
    
    var email = document.querySelector ("#email");
    var labelEmail = document.querySelector ("#labelEmail")

    var senha = document.querySelector ("#senha")
    var labelSenha = document.querySelector ("#labelSenha")

    var msgError = document.querySelector ("#msgError")
    var listaUsuario = []

    var userValid = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
    
    listaUsuario.forEach((item) =>{
        if (email.value == item.emailCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })
    if (email.value == userValid.email && senha.value == userValid.senha) {
        window.location.href = 'welcome.html'
    }else {
        labelEmail.setAttribute ('style', 'color: red')
        labelSenha.setAttribute ('style', 'color: red')
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML ='*Usuário ou senha incorretos'
        email.focus()
    }
});