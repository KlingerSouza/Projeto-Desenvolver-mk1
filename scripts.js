const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")
const buttonSignIn = document.querySelector(".button-sign-in")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = 'translateX(-50%)'
    mask.style.visibility = "visible"
    buttonSignIn.style.visibility = "hidden"
}

function esconderForm() {
    form.style.left = "-185px"
    form.style.transform = 'translateX(0)'
    mask.style.visibility = "hidden"
    buttonSignIn.style.visibility = "visible"
}
