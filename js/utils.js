//CONSULTORIAS 
function toggleSection(button) {
  // Encontrar o parágrafo correspondente à seção clicada
  var paragraph = button.nextElementSibling;

  // Alternar a altura e a opacidade do parágrafo
  if (paragraph.style.maxHeight) {
      paragraph.style.maxHeight = null;
      paragraph.style.opacity = 0;
  } else {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
      paragraph.style.opacity = 1;
  }

  // Alternar a rotação da seta
  button.lastElementChild.style.transform = button.lastElementChild.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
}

//FIM CONSULTORIAS 

//CAROUSEL 

document.addEventListener("DOMContentLoaded", function () {
  const carouselSlide = document.querySelector(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".carousel-slide img");

  let counter = 0;
  const slidesToShow = 1; // Defina o número desejado de slides a serem exibidos
  const totalSlides = 5; // Defina o número total de slides

  function setSlideWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      counter = 0;
    } else {
      counter = 50%; // Defina aqui a porcentagem de deslocamento desejada para telas maiores
    }
  }

  setSlideWidth();

  nextBtn.addEventListener("click", () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      if (counter + slidesToShow >= totalSlides) return;
      counter += slidesToShow;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    } else {
      if (counter + slidesToShow >= totalSlides - 2) return;
      counter += slidesToShow;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = `translateX(${-counter * 100 / 3}%)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 768) {
      if (counter - slidesToShow < 0) return;
      counter -= slidesToShow;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    } else {
      if (counter - slidesToShow < 0) return;
      counter -= slidesToShow;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = `translateX(${-counter * 100 / 3}%)`;
    }
  });

  carouselSlide.addEventListener("transitionend", () => {
    if (images[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = totalSlides - 2;
      carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    }
    if (images[counter].id === "firstClone") {
      carouselSlide.style.transition = "none";
      counter = totalSlides - counter - 1;
      carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
    }
  });

  window.addEventListener("resize", setSlideWidth);
});


//FIM CAROUSEL 


//FAQ 

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

//FIM FAQ 
