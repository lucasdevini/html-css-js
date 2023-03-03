let body = document.querySelector('body')
let header = document.querySelector('#header-visivel')
let logo = document.querySelector('#logo-img')
let botaoMenu = document.querySelector('#menu')
let menuNav = document.querySelector
('#barra-navegacao')
let contatos = document.querySelector('#item-contatos')
let divContatos = document.querySelector('#div-contatos')
let tituloContato = document.querySelector("#titulo-contato")
let listaContatos = document.querySelector("#lista-contatos-menu")

// Links do menu // 
let fecharMenu = document.querySelector('#fechar')
let linkMenu1 = document.querySelector('#link-menu1')
let linkMenu2 = document.querySelector('#link-menu2')
let linkMenu3 = document.querySelector('#link-menu3')

// lixeiras //
let lixeiraAzul = document.querySelector('#azul') 
let lixeiraVermelha = document.querySelector('#vermelha') 
let lixeiraAmarela = document.querySelector('#amarela') 
let lixeiraVerde = document.querySelector('#verde') 
let lixeiraMarrom = document.querySelector('#marrom') 
let lixeiraLaranja = document.querySelector('#laranja') 
let lixeiraPreta = document.querySelector('#preta') 
let lixeiraCinza = document.querySelector('#cinza') 
let lixeiraBranca = document.querySelector('#branca') 
let lixeiraRoxa = document.querySelector('#roxa') 

// Divs lixeiras 
let infoAzul = document.querySelector('#info-azul')
let infoVermelha = document.querySelector('#info-vermelha')
let infoAmarela = document.querySelector('#info-amarela')
let infoVerde = document.querySelector('#info-verde')
let infoMarrom = document.querySelector('#info-marrom')
let infoLaranja = document.querySelector('#info-laranja')
let infoPreta = document.querySelector('#info-preta')
let infoCinza = document.querySelector('#info-cinza')
let infoBranca = document.querySelector('#info-branca')
let infoRoxa = document.querySelector('#info-roxa')

// Funções do menu

botaoMenu.addEventListener('click', () => {
    menuNav.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    document.body.scroll = "no"
})

fecharMenu.addEventListener('click', () => {    
    menuNav.style.display = 'none'
    document.body.style.overflow = 'visible'
    document.body.scroll = "yes"
})

linkMenu1.addEventListener('click', () => {    
    menuNav.style.display = 'none'
    document.body.style.overflow = 'visible'
    document.body.scroll = "yes"
})

linkMenu2.addEventListener('click', () => {    
    menuNav.style.display = 'none'
    document.body.style.overflow = 'visible'
    document.body.scroll = "yes"
})

linkMenu3.addEventListener('click', () => {    
    if(listaContatos.style.display == 'block') {
        listaContatos.style.display = 'none'
    } else {
        listaContatos.style.display = 'block'
    }
})

contatos.addEventListener('click', () => {
    if(divContatos.style.display == 'block') {
        divContatos.style.display = 'none'
    } else {
        divContatos.style.display = 'block'
    }   
})

window.addEventListener('scroll', () => {
    if(window.innerWidth <= '540') {
        if(window.scrollY != 0) {
            header.style.backgroundColor = "rgba(255,255,255, 0.1)"
            logo.style.display = 'none'
        } else {
            header.style.backgroundColor = "#39BD40"
            logo.style.display = 'flex'
        }
    }
})

// Mostrar informações das lixeiras

function mostrarAzul() {
    infoAzul.style.display = 'block'
}

function mostrarVermelha() {
    infoVermelha.style.display = 'block'
}

function mostrarAmarela() {
    infoAmarela.style.display = 'block'
}

function mostrarVerde() {
    infoVerde.style.display = 'block'
}

function mostrarMarrom() {
    infoMarrom.style.display = 'block'
}

function mostrarLaranja() {
    infoLaranja.style.display = 'block'
}

function mostrarPreta() {
    infoPreta.style.display = 'block'
}

function mostrarCinza() {
    infoCinza.style.display = 'block'
}

function mostrarBranca() {
    infoBranca.style.display = 'block'
}

function mostrarRoxa() {
    infoRoxa.style.display = 'block'
}

