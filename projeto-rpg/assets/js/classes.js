class Character {
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(characterName) {
        this.name = characterName
    }

    get life() {
        return this._life
    } 

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character {
    constructor(knightName) {
        super(knightName)
        this.life = 100
        this.maxLife = this.life
        this.attack = 10
        this.defense = 8
    }
}

class Sorcerer extends Character {
    constructor(sorcererName) {
        super(sorcererName)
        this.life = 80
        this.maxLife = this.life
        this.attack = 15
        this.defense = 3
    }
}

class LitleMonster extends Character {
    constructor() {
        super('Litle Monster')
        this.life = 40
        this.maxLife = this.life
        this.attack = 4
        this.defense = 4
    }
}

class BigMosnter extends Character {
    constructor() {
        super('Big Monster')
        this.life = 120
        this.maxLife = this.life
        this.attack = 16
        this.defense = 6
    }
}

class Stage {
    constructor(fighter1Name, fighter2Name, fighter1El, fighter2El, logObject) {
        this.fighter1Name = fighter1Name
        this.fighter1El = fighter1El
        this.fighter2Name = fighter2Name
        this.fighter2El = fighter2El
        this.logObject = logObject
    }

    update() {
        // Figther 1 
        let f1Life = (this.fighter1Name.life / this.fighter1Name.maxLife)* 100
        this.fighter1El.querySelector('.bar').style.width = f1Life + "%"
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1Name.name} - HP: ${this.fighter1Name.life.toFixed(2)}`
    
        // Fighter 2
        let f2Life = (this.fighter2Name.life / this.fighter2Name.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = f2Life + "%"
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2Name.name} - HP: ${this.fighter2Name.life.toFixed(2)}`
    }

    // Ação de ataque dos personagens
    doAttack(attacking, attacked) {
        // Condicionais para os personagens abatidos
        if((attacking.life <= 0 && attacked.life > 0)) { 
            this.logObject.showMessage(`${attacking.name} já está morto!`) 
            
            return;
        } else if(attacking.life > 0 && attacked.life <= 0) { 
            this.logObject.showMessage(`${attacking.name} está batendo em cachorro morto!`) 

            return;
        }

        // variáveis aleatórias para variar ataques/defesas
        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        // Aumentar/Diminuir ataques/defesas aleatoriamente
        let actualAttack = attackFactor * attacking.attack
        let actualDefense = defenseFactor * attacked.defense
 
        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack

            this.logObject.showMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano a ${attacked.name}`) 

            if(attacked.life == 0) {
                this.logObject.showMessage(`${attacking.name} abateu ${attacked.name}!`) 
            }
        } else {
            this.logObject.showMessage(`${attacked.name} conseguiu defender o ataque de ${attacking.name}`) 
        }

        this.update()
    }
}

class Log {
    constructor(log) {
        this.log = log
    }

    showMessage(logMessage) {
        this.log.innerHTML += `<li>${logMessage}</li>`
    }
}