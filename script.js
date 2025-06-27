
AOS.init(
  {
      duration: 1200,
  }
);

const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

  const videoBoxes = document.querySelectorAll(".video");
  const modal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("videoContainer");
  const closeBtn = document.querySelector(".close");

  videoBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const videoSrc = box.getAttribute("data-video");

      // Cria o elemento <video>
      const video = document.createElement("video");
      video.src = videoSrc;
      video.controls = true;
      video.autoplay = true;
      videoContainer.innerHTML = "";
      videoContainer.appendChild(video);

      // Abre o modal
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoContainer.innerHTML = ""; // remove o vídeo para parar o carregamento
  });

  // Fecha o modal ao clicar fora
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoContainer.innerHTML = "";
    }
  });

const novaPorcentagem = 30;
const classePorcentagem = 'p30'; // arredondado para o nome da classe

// Atualiza todas as barras
const bars = document.querySelectorAll('.bar');
bars.forEach(bar => {
  bar.classList.remove('p13', 'p22', 'p30', 'p39', 'p48', 'p56', 'p65', 'p74', 'p83', 'p91', 'p100');
  bar.classList.add(classePorcentagem);
});

// Atualiza todos os textos da barra
const textos = document.querySelectorAll('.barra .obs');
textos.forEach(texto => {
  const span = texto.querySelector('span');
  if (span) {
    texto.innerHTML = `${span.outerHTML} ${novaPorcentagem}% dos ingressos vendidos`;
  }
});

