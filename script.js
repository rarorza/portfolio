
const titulo = document.querySelector(".digitando");
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