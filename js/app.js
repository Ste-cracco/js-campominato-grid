const grigliaElement = document.querySelector('.container_griglia');
const buttonElement = document.querySelector('.bottone');

buttonElement.addEventListener('click', function() {

    for(let i = 0; i < 100; i++) {
        const divCella = document.createElement('div');
        divCella.classList.add('cella');
        grigliaElement.append(divCella);
    }
});