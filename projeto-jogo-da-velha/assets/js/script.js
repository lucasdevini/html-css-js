let vez = 1
let linha1 = document.querySelector('div[class="linhas 1"]')
const colunas = document.querySelectorAll('.colunas')
resultado = 0

for (let i = 0; i < colunas.length; i++) {
  colunas[i].addEventListener('click', function() {
    if(!(colunas[i].classList.contains('x') | colunas[i].classList.contains('o'))) {

        if(vez%2 != 0) {
            colunas[i].innerText = 'X'
            colunas[i].classList.add('x')            
        } else {
            colunas[i].innerText = 'O'
            colunas[i].classList.add('o') 
        }  

        const jogadas = linha1.querySelectorAll('div')
        let somaX = 0
        let somaO = 0

        for(let j = 0; j < jogadas.length; j++) {
            if(jogadas[j].classList.contains('x')) {
              somaX += 1; 
            } else if(jogadas[j].classList.contains('o')) {
              somaO += 1;
            }

            if(somaX / 3 == 1) {
              resultado = 1
              console.log('fim de jogo')
            } else if(somaO / 3 == 1) {
              resultado = 1
              console.log('fim de jogo')
            }

            console.log(somaX)
            console.log(somaO)
        }
          
      vez++
    }  
  });
}



