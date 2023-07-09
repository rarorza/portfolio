
function typing(){
    function digitando(elemento) {
        const arrayTitulo = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTitulo.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i)
        })
    }
    const titulo = document.querySelector(".digitando");
    digitando(titulo);
}

const mobileMenu = document.querySelector('.fa-bars');

mobileMenu.addEventListener('click'), ()=>{
    mobileMenu.classList.toggle('fa-x')
}

typing()