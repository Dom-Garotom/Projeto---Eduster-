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
  const modalInfo = document.getElementById("infoPriority"); 
  const modalConclude = document.getElementById("conclude");
  
  const openButton = document.querySelector("li[variant-2]");
  const agendarButton = modal.querySelector(".btn-dialog");
  const buttonInfoModal = modal.querySelector(".button-dialog-info");
  
  const closeModalConclude = modalConclude.querySelector("i");
  const closeModalInfo = modalInfo.querySelector("i");
  const closeButton = modal.querySelector(".button-close");
  const closeButtonFooter = modal.querySelector(".btn-dialog-footer");


  
  const pModalConclude = modalConclude.querySelector("p");

  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  agendarButton.addEventListener("click", () => {
    modal.close();
    modalConclude.showModal();
    pModalConclude.innerHTML = "Agendamento de sala concluido com sucesso";
    
    closeModalConclude.addEventListener("click", () =>{
      modalConclude.close();
    })

  });

  closeButtonFooter.addEventListener("click", () => {
    modal.close();
    modalConclude.showModal();
    pModalConclude.innerHTML = "Agendamento de sala concluido com sucesso";
    
    closeModalConclude.addEventListener("click", () =>{
      modalConclude.close();
    })

  });

  buttonInfoModal.addEventListener("click", () => {
    modal.close()
    modalInfo.showModal();

    closeModalInfo.addEventListener("click", () => {
      modalInfo.close();
      modal.showModal();
    })

  })

}

function showListSchedule() {
  const modal = document.getElementById("modal-2");
  const openButton = document.querySelector("li[variant-3]");
  const closeButton = modal.querySelector(".button-close");
  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

}

function showReminder() {
  const modal = document.getElementById("modal-3");
  const modalConclude = document.getElementById("conclude");

  const agendarButton = modal.querySelector(".btn-dialog");
  const openButton = document.querySelector("li[variant-4]");
  const pModalConclude = modalConclude.querySelector("p");

  const closeModalConclude = modalConclude.querySelector("i");
  const closeButton = modal.querySelector(".button-close");
  const closeButtonFooter = modal.querySelector(".btn-dialog-footer");
  
  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  agendarButton.addEventListener("click", () => {
    modal.close();
    modalConclude.showModal();
    pModalConclude.innerHTML = "Lembrete adicionado com sucesso";
    
    closeModalConclude.addEventListener("click", () =>{
      modalConclude.close();
    })

  });

  closeButtonFooter.addEventListener("click", () => {
    modal.close();
    modalConclude.showModal();
    pModalConclude.innerHTML = "Agendamento de sala concluido com sucesso";
    
    closeModalConclude.addEventListener("click", () =>{
      modalConclude.close();
    })

  });

}

// Script para o filtro

document.getElementById('filterBtn').addEventListener('click', () => {
  const filterContent = document.getElementById('filterContent');
  if (filterContent.style.display === "block") {
    filterContent.style.display = "none";
  } else {
    filterContent.style.display = "block";
  }
});

// script para o button do aside 

document.getElementById("hide-button").addEventListener("click", () =>{
  const aside = document.querySelector("aside");
  aside.classList.toggle("none");
})


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
