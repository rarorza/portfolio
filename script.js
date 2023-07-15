function menuMobile() {
  const mobileMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector('header .navegacao-primaria')

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
  })
}

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
    divExperience.forEach((div) => {
      div.classList.remove('ativo');
    });
    liExperience.forEach((button) => {
      button.classList.remove('ativo');
    });
    divExperience[index].classList.add('ativo');
    liExperience[index].classList.add('ativo');
  }

  function slideShowEdu(index) {
    divEducation.forEach((div) => {
      div.classList.remove('ativo');
    });
    liEducation.forEach((button) => {
      button.classList.remove('ativo');
    });
    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }

  liExperience.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShowExp(index);
    });
  });

  liEducation.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShowEdu(index);
    });
  });
}

function gridProjects(){
  const listaAll = document.querySelectorAll('.projects_storage ul li');
  const buttonGeral = document.querySelectorAll('.projects_models ul li');
  const buttonAll = document.querySelectorAll('.projects_models .all');
  
  function removeClick(index) {
    buttonGeral.forEach((item) => {
      item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
  }
  
  buttonGeral.forEach((event, index) => {
    event.addEventListener('click', () => {
      removeClick(index);
    });
  });
  
  buttonGeral.forEach((item) => {
    item.addEventListener('click', (e) => {
      let currentButton = e.target;
      if (currentButton.classList.contains('all')) {
        showLista(listaAll);
      }
      if (currentButton.classList.contains('backend')) {
        showLista(listaAll, "backend");
      }
      if (currentButton.classList.contains('data')) {
        showLista(listaAll, "data");
      }
      if (currentButton.classList.contains('ia')) {
        showLista(listaAll, "ia");
      }
      if (currentButton.classList.contains('all')) {
        showLista(listaAll, "all");
      }
    });
  });
  
  function showLista(lista, button = "all") {
  
    lista.forEach((item) => {
      item.classList.remove('ativo');
    })
    // Para editar os projetos, leve em consideração a ordem dos itens no html
    if (button == 'backend') {
      lista[0].classList.add('ativo');
      lista[1].classList.add('ativo');
      lista[2].classList.add('ativo');
      lista[3].classList.add('ativo');
    }
    if (button == 'data') {
      lista[4].classList.add('ativo');
      lista[5].classList.add('ativo');
    }
    if (button == 'ia') {
      lista[6].classList.add('ativo');
      lista[7].classList.add('ativo');
    }
    if (button == 'all') {
      for (let i = 0; i < lista.length; i++) {
        lista[i].classList.add('ativo');
      }
    }
  }
}

gridProjects();
digitandoTitulo();
menuMobile();
sobreMim();
