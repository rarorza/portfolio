const titulo = document.querySelector(".digitando");
const mobileMenu = document.querySelector(".fa-bars");
const navMenu = document.querySelector('header .navegacao-primaria')

function digitando(elemento) {
    const arrayTitulo = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTitulo.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}
digitando(titulo);

mobileMenu.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

typing()