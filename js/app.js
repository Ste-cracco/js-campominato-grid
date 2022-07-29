const grigliaElement = document.querySelector('.container_griglia');
const buttonElement = document.querySelector('.bottone');

buttonElement.addEventListener('click', function() {

    for(let i = 1; i <= 100; i++) {
        const divCella = document.createElement('div');
        divCella.append(i);
        divCella.classList.add('cella');
        grigliaElement.append(divCella);
    }
});