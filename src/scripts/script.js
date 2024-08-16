// Scripts dos cards da faq

const cards_faq = document.querySelectorAll('.card_faq');

cards_faq.forEach(card =>{
    card.addEventListener('click', () =>{
        const resposta = card.querySelector('.resposta_faq');
        resposta.classList.toggle('active');
    })
})


//  Scripts dos modais

const buttonDeAgendar = document.getElementById("buttonDeAgendar");
const modalDeAgendar = document.getElementById("modal");
const buttonDeSair = document.getElementById("sair");


buttonDeAgendar.addEventListener('click', ()=>{
    modalDeAgendar.showModal()
})

buttonDeSair.addEventListener('click', () => {
    modalDeAgendar.close();
})
