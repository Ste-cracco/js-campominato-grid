const grigliaElement = document.querySelector('.container_griglia');
const buttonElement = document.querySelector('.bottone_play');
buttonElement.addEventListener('click', creaGriglia)

let posizioniBombe = []

function creaGriglia() {
    resetGame()

    posizioniBombe = creaBomba()
    
    console.log(posizioniBombe)
    
    for(let i = 0; i < 100; i++) {        
        const cella = creaCella();
        cella.innerHTML = i + 1;
        grigliaElement.append(cella);                
    }
}

function resetGame () {
    grigliaElement.innerHTML = '';
}

function creaCella() {
    const divCella = document.createElement('div');
    divCella.classList.add('cella');
    divCella.addEventListener('click', gestoreClick)
    return divCella;
}

function gestoreClick() {
    const cella = this
    cella.classList.add('active')
    console.log(cella.innerHTML)
    cella.removeEventListener('click', gestoreClick)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function creaBomba() {
    const bombe = []
    while(bombe.length < 16) {
        const n = getRandomIntInclusive(1, 100)
        bombe.push(n)
    }  
    return bombe    
}