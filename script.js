function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo');

    function activeTab(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', () =>{
        activeTab(index);
      })
    });
  }
}

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if(accordionList.length){
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

function initScroolSuave(event){
  const linksInsternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }
  linksInsternos.forEach((link)=> {
    link.addEventListener('click', scrollToSection);
  });
}


function initanimaScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length){
    const windowPercent = window.innerHeight * 0.69;

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowPercent) < 0;
        if(isSectionVisible){
          section.classList.add('ativo');
        }
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}


function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');


  if(botaoAbrir && botaoFechar && containerModal){
    function abrirModal(){
      event.preventDefault();
      containerModal.classList.add('ativo');
    }

    function fecharModal(){
      event.preventDefault();
      containerModal.classList.remove('ativo');
    }

    function clickForaModal(event){
      if(event.target === this){
        fecharModal(event);
      }
    }

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', clickForaModal);

  }
}

initModal();
initTabNav();
initAccordion();
initScroolSuave();
initanimaScroll();
