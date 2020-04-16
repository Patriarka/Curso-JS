var vet = []

function maior()
{
    let maior_num = vet[0]
    for(let i = 0; i < vet.length; i++) {
        if(maior_num < vet[i]) maior_num = vet[i]
    }
    return maior_num
}

function menor()
{
    let menor_num = vet[0]
    for(let i = 0; i < vet.length; i++) {
        if(menor_num > vet[i]) menor_num = vet[i]
    }
    return menor_num
}

function soma()
{
    let res = 0;
    for(let i = 0; i < vet.length; i++) {
        res += vet[i]
    }
    return res
}

function media()
{
    return soma() / vet.length
}

function adicionar()
{
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('selvet')
    let num = Number(txtnum.value)
    console.log(vet)

    if(txtnum.value.length == 0 || num > 100 || num <= 0 || vet.indexOf(num) != -1) window.alert('Erro! Digite um número válido')
    else if(vet.length == 100) window.alert('Erro! Todos os números foram digitados')
    else {
        vet.push(num) 
        let item = document.createElement('option')
        item.text = `Valor ${vet[vet.length-1]} adicionado`
        tab.appendChild(item)
    }
}

function finalizar()
{
    let tab = document.getElementById('res')
    let texto = document.createElement('p')
    texto.innerHTML = `Ao todo, temos ${vet.length} números cadastrados</br>`
    texto.innerHTML += `O maior elemento é ${maior()}</br>`
    texto.innerHTML += `O menor elemento é ${menor()}</br>`
    texto.innerHTML += `Somando todos os valores, temos ${soma()}</br>`
    texto.innerHTML += `A média de todos os valores, é de ${media()}`    
    
    tab.appendChild(texto)


}
