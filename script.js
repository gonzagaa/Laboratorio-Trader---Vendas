
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

const novaPorcentagem = 13;
const classePorcentagem = 'p13'; // arredondado para o nome da classe

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

const modalGeral = document.getElementById("modalDepoimentos");
const videoContainerGeral = document.getElementById("video-container-geral");
const closeBtnGeral = document.querySelector(".close-depoimento-geral");

// Seleciona todos os .card que têm o atributo data-video
document.querySelectorAll(".card[data-video]").forEach((card) => {
  card.addEventListener("click", () => {
    const videoUrl = card.getAttribute("data-video");
    if (!videoUrl) return;

    modalGeral.style.display = "flex";
    videoContainerGeral.innerHTML = `
      <iframe src="${videoUrl}?autoplay=1&rel=0"
        title="Depoimento"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  });
});

closeBtnGeral.addEventListener("click", () => {
  modalGeral.style.display = "none";
  videoContainerGeral.innerHTML = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modalGeral) {
    modalGeral.style.display = "none";
    videoContainerGeral.innerHTML = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalGeral.style.display === "flex") {
    modalGeral.style.display = "none";
    videoContainerGeral.innerHTML = "";
  }
});

