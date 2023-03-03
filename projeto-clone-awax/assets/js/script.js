// Itens do menu
botaoMenu = document.querySelector('#menu-mobile')
menu = document.querySelector('nav')
menuItens = document.querySelector('nav ul')

window.addEventListener('resize', () => {
    if(window.innerWidth > 820) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})

// Abrir e fechar o menu mobile
botaoMenu.addEventListener('click', () => {
    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex' 
    }
})

// Slider da section banner
banner = document.querySelector('#section-banner .slider')

// Botões do slider do banner
bannerBtn1 = document.querySelector('#btnBanner-1 .buttons-bg')
bannerBtn2 = document.querySelector('#btnBanner-2 .buttons-bg')
bannerBtn3 = document.querySelector('#btnBanner-3 .buttons-bg')

// Interação com slide da section banner
bannerBtn1.addEventListener('click', () => {
    banner.style.marginLeft = '0vw'
    bannerBtn1.style.backgroundColor = '#B78C59'
    bannerBtn2.style.backgroundColor = ''
    bannerBtn3.style.backgroundColor = ''
})

bannerBtn2.addEventListener('click', () => {
    banner.style.marginLeft = '-100vw'
    bannerBtn2.style.backgroundColor = '#B78C59'
    bannerBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    bannerBtn3.style.backgroundColor = ''
})

bannerBtn3.addEventListener('click', () => {
    banner.style.marginLeft = '-200vw'
    bannerBtn3.style.backgroundColor = '#B78C59'
    bannerBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    bannerBtn2.style.backgroundColor = ''
})

// Slider da section our team
teamSlider = document.querySelector('#our-team .slider')

// Botões do slider da section team
teamBtn1 = document.querySelector('#btnTeam-1 .buttons-bg')
teamBtn2 = document.querySelector('#btnTeam-2 .buttons-bg')
teamBtn3 = document.querySelector('#btnTeam-3 .buttons-bg')

// Interação com slide da section team
teamBtn1.addEventListener('click', () => {
    teamSlider.style.marginRight = '-200vw'
    teamBtn1.style.backgroundColor = '#B78C59'
    teamBtn2.style.backgroundColor = ''
    teamBtn3.style.backgroundColor = ''
})

teamBtn2.addEventListener('click', () => {
    teamSlider.style.marginRight = '0vw'
    teamBtn2.style.backgroundColor = '#B78C59'
    teamBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    teamBtn3.style.backgroundColor = ''
})

teamBtn3.addEventListener('click', () => {
    teamSlider.style.marginRight = '200vw'
    teamBtn3.style.backgroundColor = '#B78C59'
    teamBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    teamBtn2.style.backgroundColor = ''
})

// Slider da section clients
clientSlider = document.querySelector('#clients .slider')

// Botões do slider do clients
clientBtn1 = document.querySelector('#btnClients-1 .buttons-bg')
clientBtn2 = document.querySelector('#btnClients-2 .buttons-bg')
clientBtn3 = document.querySelector('#btnClients-3 .buttons-bg')

// Interação com slide da section clients
clientBtn1.addEventListener('click', () => {
    clientSlider.style.marginRight = '-200vw'
    clientBtn1.style.backgroundColor = '#B78C59'
    clientBtn2.style.backgroundColor = ''
    clientBtn3.style.backgroundColor = ''
})

clientBtn2.addEventListener('click', () => {
    clientSlider.style.marginRight = '0vw'
    clientBtn2.style.backgroundColor = '#B78C59'
    clientBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    clientBtn3.style.backgroundColor = ''
})

clientBtn3.addEventListener('click', () => {
    clientSlider.style.marginRight = '200vw'
    clientBtn3.style.backgroundColor = '#B78C59'
    clientBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    clientBtn2.style.backgroundColor = ''
})

/* -------------------------------------------- */

// Slider da section Features
featureSlider = document.querySelector('#premium .slider')

// Botões do slider do clients
featureBtn1 = document.querySelector('#btnFeatures-1 .buttons-bg')
featureBtn2 = document.querySelector('#btnFeatures-2 .buttons-bg')
featureBtn3 = document.querySelector('#btnFeatures-3 .buttons-bg')

// Interação com slide da section clients
featureBtn1.addEventListener('click', () => {
    featureSlider.style.marginRight = '-200vw'
    featureBtn1.style.backgroundColor = '#B78C59'
    featureBtn2.style.backgroundColor = ''
    featureBtn3.style.backgroundColor = ''
})

featureBtn2.addEventListener('click', () => {
    featureSlider.style.marginRight = '0vw'
    featureBtn2.style.backgroundColor = '#B78C59'
    featureBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    featureBtn3.style.backgroundColor = ''
})

featureBtn3.addEventListener('click', () => {
    featureSlider.style.marginRight = '200vw'
    featureBtn3.style.backgroundColor = '#B78C59'
    featureBtn1.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    featureBtn2.style.backgroundColor = ''
})




