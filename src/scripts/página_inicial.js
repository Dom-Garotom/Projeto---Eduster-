const cards_faq = document.querySelectorAll('.card_faq');

cards_faq.forEach(card =>{
    card.addEventListener('click', () =>{
        const resposta = card.querySelector('.resposta_faq');
        resposta.classList.toggle('active');
    })
})