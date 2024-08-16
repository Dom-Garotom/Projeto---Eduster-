//  scripts de login e registro

const form = document.querySelector('form');
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;
const url = '../aplicação.html'

form.addEventListener('submit', ( form) =>{
    form.preventDefault();

    if (email === undefined || senha === undefined){
        alert('Prencha os campos de forma correta!')
    }

      teste(url)
})

var teste = (url)=>{
    window.location.href = url;
}
