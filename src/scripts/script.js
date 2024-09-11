// Scripts dos cards da faq

const cards_faq = document.querySelectorAll(".card_faq");

cards_faq.forEach((card) => {
  card.addEventListener("click", () => {
    cards_faq.forEach((item) => {
      const resposta = item.querySelector(".resposta_faq");
      resposta.classList.remove("active");
    });

    const resposta = card.querySelector(".resposta_faq");
    resposta.classList.toggle("active");
  });
});

//  Scripts dos modais

function showCreateSchedule() {
  const modal = document.getElementById("modal-1");
  const openButton = document.querySelector("li[variant-2]");
  const closeButton = modal.querySelector(".button-close");
  const agendarButton = modal.querySelector(".btn-dialog");
  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  agendarButton.addEventListener("click", () => {
    modal.close();
  });
}

function showListSchedule() {
  const modal = document.getElementById("modal-2");
  const openButton = document.querySelector("li[variant-3]");
  const closeButton = modal.querySelector(".button-close");
  const agendarButton = modal.querySelector(".btn-dialog");
  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  agendarButton.addEventListener("click", () => {
    modal.close();
  });
}

// script do menu


function showMenuHeader() {
  let menuIcon = document.querySelector(".menu");
  let headerItems = document.querySelectorAll("#header-list li");
  let headerList = document.getElementById("header-list");
  let xMark = document.querySelector(".x-mark");
  menuIcon.addEventListener("click", () => {
    headerList.style.right = 0;
  });
  xMark.addEventListener("click", () => {
    headerList.style.right = "-100%";
  });

  headerItems.forEach((element) => {
    element.addEventListener("click", () => {
      headerList.style.right = "-100%";
    });
  });
}
