
function digitandoTitulo() {
  const titulo = document.querySelector(".digitando");

  function letra(elemento) {
    const arrayTitulo = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTitulo.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i)
    })
  }
  letra(titulo);
}

function menuMobile() {
  const mobileMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector('header .navegacao-primaria')
  
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
  })
}

function sobreMim() {
  const divExperience = document.querySelectorAll('.experience_content div');
  const liExperience = document.querySelectorAll('.experience_content ul li');
  const divEducation = document.querySelectorAll('.education_content div');
  const liEducation = document.querySelectorAll('.education_content ul li');
  
  divExperience[0].classList.add('ativo');
  liExperience[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShowExp(index) {
    divExperience.forEach((div)=>{
      div.classList.remove('ativo');
    });
    liExperience.forEach((button)=>{
      button.classList.remove('ativo');
    });
    divExperience[index].classList.add('ativo');
    liExperience[index].classList.add('ativo');
  }
  
  function slideShowEdu(index) {
    divEducation.forEach((div)=>{
      div.classList.remove('ativo');
    });
    liEducation.forEach((button)=>{
      button.classList.remove('ativo');
    });
    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }
  
  liExperience.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
      slideShowExp(index);
    });
  });
  
  liEducation.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShowEdu(index);
    });
  });
}

digitandoTitulo();
menuMobile();
sobreMim();
