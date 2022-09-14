let teclado = document.querySelector('.teclado')
let repeat = document.querySelector('.repeat')
let repeats = []
function conferirLetra(letra) {
    let index = []
    for (let i = 0; i < repeat.innerText.length; i++) {
        index.push(repeat.innerText[i])
        if (index.includes(letra)) {
            alert('letra repetida')
            return
        }
    }
    repeat.innerText += letra
    return
}

let letras = []
let letra = ""
let resposta = document.querySelector('.resposta')
let tipo = document.querySelector('.tipo')
let dificuldade = document.querySelector('.dificuldade')
function selectData(data) {
    let escolha = Number(Math.random() * (data.length - 0) - 0).toFixed(0)
    for (let j = 0; j < data.length; j++) {
        if (escolha <= data.length) {
            if (data[j].id == escolha) {
                for (let p = 0; p < data[j].nome.length; p++) {
                    let p = document.createElement('p')
                    p.innerText = "_"
                    resposta.appendChild(p)
                    letra = data[j].nome
                    tipo.innerText = data[j].tipo
                    dificuldade.innerText = data[j].dificuldade
                }
            }
        }
    }
}
selectData(data)
let desenho = document.querySelector('.desenho')

for (let o = 0; o < letra.length; o++) {
    letras.push(letra[o])
}

teclado.addEventListener('click', function (e) {
    if (e.path[0].className == 'tecla') {
        conferirLetra(e.path[0].id)
        for (let o = 0; o < letra.length; o++) {
            if (letra[o] == e.path[0].id) {
                resposta.children[o].innerText = e.path[0].id
            }
        }
        if (certaResposta() == letra) {
            alert(`CERTA RESPOSTA!!!`)
            window.location.reload(true)
        }
    }
    if (e.path[0].className == 'tecla') {
        if (!letras.includes(e.path[0].id) && !repeats.includes(e.path[0].id)) {
            repeats.push(e.path[0].id)
            if (desenho.children[0].className == 'headNull') {
                desenho.children[0].className = 'head'
            } else if (desenho.children[0].className == 'head') {
                desenho.children[0].className = 'head1'
            } else if (desenho.children[0].className == 'head1') {
                desenho.children[0].className = 'head2'
            } else if (desenho.children[0].className == 'head2') {
                desenho.children[0].className = 'head3'
            } else if (desenho.children[0].className == 'head3') {
                desenho.children[0].className = 'head4'
            } else if (desenho.children[0].className == 'head4') {
                desenho.children[0].className = 'head5'
            } else if (desenho.children[0].className == 'head5') {
                desenho.children[0].className = 'headDie'
                alert(`PERDEU! Resposta certa = ${letra}`)
                window.location.reload(true)
            }
        }
    }
})

let ta = document.querySelector('.ta')
let tey = document.querySelector('.tey')

tey.addEventListener('click', function (e) {
    if (ta.value == letra) {
        alert(`CERTA RESPOSTA!!!`)
        window.location.reload(true)
    } else if (ta.value == letra.toLowerCase()) {
        alert(`CERTA RESPOSTA!!!`)
        window.location.reload(true)
    } else {
        alert(`PERDEU! Resposta certa = ${letra}`)
        window.location.reload(true)
    }
})



function certaResposta() {
    let reason = ""
    for (let p = 0; p < resposta.children.length; p++) {
        reason += resposta.children[p].innerText
    }
    return reason
}