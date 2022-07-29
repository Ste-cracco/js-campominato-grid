
// Funzioni:
function creazioneCella(i) {
    const divCella = document.createElement('div');
    divCella.classList.add('cella');
    divCella.addEventListener('click', function() {
        gestoreClick(i+1)
        divCella.classList.add('active');
    });
    return divCella;
}

function gestoreClick(i) {
    console.log(i);

}
// Fine Funzioni


const grigliaElement = document.querySelector('.container_griglia');
const buttonElement = document.querySelector('.bottone');

buttonElement.addEventListener('click', function() {

    for(let i = 0; i < 100; i++) {        
        const cella = creazioneCella(i);
        cella.innerHTML = i + 1;
        grigliaElement.append(cella);                
    }
});



