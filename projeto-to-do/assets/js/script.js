// Definição das variáveis não mutáveis
let digitarTitulo = document.querySelector('input')
let tituloPrincipal = document.querySelector('h1')
let lista = document.querySelector('#listagem ul')
let adicionar = document.querySelector('#adicionar-item')

// Função para adicionar o título principal da lista
digitarTitulo.addEventListener('keyup', (e) => {
   if(e.key == 'Enter') {
        tituloPrincipal.innerHTML = digitarTitulo.value
        digitarTitulo.style.display = 'none'
        tituloPrincipal.style.display = 'block'
   }
})

// Função para editar o título principal
tituloPrincipal.addEventListener('click', () => {    
    digitarTitulo.value = tituloPrincipal.innerHTML
    tituloPrincipal.innerHTML = ''
    digitarTitulo.style.display = 'block'
    tituloPrincipal.style.display = 'none'
})

// Função para adicionar os elementos dos itens da lista
adicionar.addEventListener('click', () => { 
    // Definição dos elementos da lista
    let novoLi = document.createElement('li')
    let marcadorNome = document.createElement('div')
    let marcador = document.createElement('div')
    let adicionarTextoLi = document.createElement('input')
    let textoLi = document.createElement('div')
    let editar = document.createElement('div')
    let editarLi = document.createElement('div')
    let removerLi = document.createElement('div')

    // Estilização dos elementos do li (com a adição de classes do CSS)
    adicionarTextoLi.setAttribute("placeholder", "Digite o nome do item")
    marcadorNome.classList.add('marcador-nome')
    marcador.classList.add('marcador')
    textoLi.classList.add('nome-li')
    editar.classList.add('editar')
    editarLi.classList.add('editar-li')
    editarLi.innerText = 'E'
    removerLi.classList.add('remover-li')
    removerLi.innerText = 'X'

    // Adição dos elementos da lista
    novoLi.appendChild(marcadorNome)
    marcadorNome.appendChild(marcador)
    marcadorNome.appendChild(adicionarTextoLi)
    marcadorNome.appendChild(textoLi)
    novoLi.appendChild(editar)
    editar.appendChild(editarLi)
    editar.appendChild(removerLi)
    

    // Função que adiciona os itens da lista
    adicionarTextoLi.addEventListener('keyup', (e) => {
        if(e.key == 'Enter') {
             textoLi.append(adicionarTextoLi.value)
             adicionarTextoLi.style.display = 'none'
             textoLi.style.display = 'block'
        }
     })

    // Função para marcar os itens da lista
    marcador.addEventListener('click', () => {
        marcador.classList.toggle('marcado')
        textoLi.classList.toggle('listado')
    })

    // Função para editar o nome dos itens da lista
    editarLi.addEventListener('click', () => {
        if(textoLi.innerText != '') {
            textoLi.style.display = 'none'
            adicionarTextoLi.value = textoLi.innerText
            textoLi.innerText = ''
            adicionarTextoLi.style.display = 'block'
        } else {
            textoLi.style.display = 'none'
            adicionarTextoLi.style.display = 'block'
        }   
    })

    // Função para excluir  itens da lista
    removerLi.addEventListener('click', () => {
        novoLi.remove();
    })
    
    // Adiciona o item(li) à lista(ul)
    lista.appendChild(novoLi)
})

