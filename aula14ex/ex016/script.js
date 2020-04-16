function calcular()
{
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! '
        window.alert("Erro! Faltam Dados")
    } else {
        res.innerHTML = 'Contando:'
        var comeco = Number(ini.value)
        var termino = Number(fim.value)
        var pula = Number(passo.value)
        if(pula <= 0) {
            window.alert('Passo inválido! Considerado passo 1')
            pula = 1;
        }
        
        if(comeco < termino){
            // Contagem crescente
            for(let i = comeco; i <= termino; i += pula) {
                res.innerHTML += ` ${i} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for(let i = comeco; i >= termino; i -= pula) {
                res.innerHTML += ` ${i} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
