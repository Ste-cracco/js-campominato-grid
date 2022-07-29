// Funzioni:
function creazioneCella() {
    const divCella = document.createElement('div');
    divCella.classList.add('cella');
    divCella.addEventListener('click', gestoreClick);
    return divCella;
}

function gestoreClick() {
    console.log(i);
}
// Fine Funzioni


const grigliaElement = document.querySelector('.container_griglia');
const buttonElement = document.querySelector('.bottone');

buttonElement.addEventListener('click', function() {

    for(let i = 0; i < 100; i++) {        
        const cella = creazioneCella();
        cella.innerHTML = i + 1;
        grigliaElement.append(cella); 
               
    }
});



