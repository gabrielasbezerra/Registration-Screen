const btn = document.querySelector("#entrar");
btn.addEventListener("click", function(){
    location.replace("signin.html")
});

const btnCriar = document.querySelector ("#criar")
const emailInput = document.querySelector("#email");
const confEmailInput = document.querySelector("#confEmail");
const passInput = document.querySelector("#password");
const confPassInput = document.querySelector("#confPass");
const nameInput = document.querySelector("#name");


btnCriar.addEventListener('click', function(e){
    e.preventDefault();
    const emailValue = document.querySelector("#email").value;
    const confEmailValue = document.querySelector ("#confEmail").value;
    const passwordValue = document.querySelector("#password").value;
    const confPassValue = document.querySelector ("#confPass").value;
    const nameValue = document.querySelector ("#name").value;

    if (emailValue === confEmailValue) {
        if (passwordValue === confPassValue){
            if (nameValue != ''){ window.open("welcome.html")
            }
            else{alert("Favor preencher todos os campos.")}
        }
        else{alert("Confirmação de senha não corresponde a senha cadastrada, digite novamente.")}
        }
    else{alert("Confirmação de Email não corresponde ao email cadastrado, digite novamente.")}
});

const btnDark = document.getElementById ("btn");

btnDark.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})



/* 
    function cadastro (){
    var name = document.getElementById ("name");
    var email = document.getElementById ("email");
    var confEmail = document.getElementById ("confEmail");
    var password = document.getElementById ("password");
    var confPass = document.getElementById ("confPass");

    var dados = localStorage.getItem("dadosCadastro")
    
    if (dados == null){
        localStorage.setItem("dadosCadastro", "[]");
        dados = [];
    }
    var auxRegistro = {
        emailValue: email.value,
        confEmailValue : confEmail.value,
        passwordValue : password.value,
        confPassValue : confPass.value,
        nameValue : nameValue.value   
    }
    dados.push(auxRegistro);
    localStorage.setItem("dadosCadastro", JSON.stringify(dados));

}*/
