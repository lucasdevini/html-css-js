// Instâncias
let log = new Log(document.querySelector('.log')) 
let knight = new Knight('Lucas')
let monster = new BigMosnter()
let stage = new Stage(
    knight, 
    monster, 
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

// Inicializando o script
stage.update()

// Funções para atualizar os ataques
stage.fighter1El.querySelector('button').addEventListener('click', ()=> {
    stage.doAttack(stage.fighter1Name, stage.fighter2Name)
})

stage.fighter2El.querySelector('button').addEventListener('click', ()=> {
    stage.doAttack(stage.fighter2Name, stage.fighter1Name)
})