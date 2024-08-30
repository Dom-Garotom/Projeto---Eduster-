// Scripts dos cards da faq

const cards_faq = document.querySelectorAll('.card_faq');

cards_faq.forEach(card =>{
    card.addEventListener('click', () =>{

        cards_faq.forEach( item =>{
            const resposta = item.querySelector('.resposta_faq');
            resposta.classList.remove('active');
        });

        const resposta = card.querySelector('.resposta_faq');
        resposta.classList.toggle('active');
    });
});


//  Scripts dos modais

// const buttonDeAgendar = document.getElementById("buttonDeAgendar");
// const modalDeAgendar = document.getElementById("modal");
// const buttonDeSair = document.getElementById("sair");


// buttonDeAgendar.addEventListener('click', ()=>{
//     modalDeAgendar.showModal()
// })

// buttonDeSair.addEventListener('click', () => {
//     modalDeAgendar.close();
// })


// script do menu 


let menuIcon = document.querySelector(".menu");
let headerItems = document.querySelectorAll("#header-list li")
let headerList = document.getElementById("header-list")
let xMark = document.querySelector(".x-mark")

menuIcon.addEventListener('click',()=>{
    headerList.style.right = 0;
})
xMark.addEventListener("click", () =>{
    headerList.style.right = "-100%";
})

headerItems.forEach( element =>{
    element.addEventListener("click" , () =>{
        headerList.style.right = "-100%";
    })
})