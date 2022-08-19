const btn = document.querySelector("#criar");
btn.addEventListener("click", function(){
    location.replace("index.html")
});

const emailDB = "gabriela@gmail.com";
const passDB = "12345";

const btn2 = document.querySelector("#entrar");
btn2.addEventListener("click", function(e){
    e.preventDefault();

    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    console.log(password);
    console.log(email);

    if (email == emailDB) {
        if (password == passDB) {
            window.open("welcome.html")
        }
            else {alert ("Senha Inválida")
        }
    }
    else (alert("Usuário Inexistente"))
});

const btnDark = document.getElementById ("btn");

btnDark.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})