const grigliaElement = document.querySelector('.container_griglia');
const buttonElement = document.querySelector('.bottone');

// Funzioni:

function creazioneCella() {
    const divCella = document.createElement('div');
    divCella.classList.add('cella');
    return divCella;
}

function gestoreClick() {
    console.log('click')
}


buttonElement.addEventListener('click', function() {

    for(let i = 0; i < 100; i++) {
        
        const cella = creazioneCella();
        cella.innerHTML = i + 1;
        grigliaElement.append(cella);        
    }
});

