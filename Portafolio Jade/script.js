function alertita (){
    alert ("!Bienvenido a mi portafolio!")
}


const BotonAceptarCookies = document.getElementById("aceptar-cookies")
const avisoCookies = document.getElementById("aviso-cookies")


BotonAceptarCookies.addEventListener("click", () => {
    avisoCookies.classList.remove("activo");
});

alertita()

console.log("kasjdkasjd")