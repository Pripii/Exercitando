function encriptaFrase(frase) {
    // Quebra por espaço e junta tudo
    fraseJuntada = frase.split(" ").join("")

    // pega o tamanho da frase juntada
    tamanhoDaFraseJuntada = fraseJuntada.length

    // raiz do tamanho
    raiz = Math.sqrt(tamanhoDaFraseJuntada)

    // arredonda a raiz
    arredondaRaiz = Math.round(raiz)

    // declara variaveis
    grid = []
    pulo = 0
    fraseEncriptada = ""

    // monta a matriz
    while(true) {
        if (fraseJuntada.substr(pulo, arredondaRaiz) == "") {
            break;
        }

        grid.push(fraseJuntada.substr(pulo, arredondaRaiz))
        
        pulo+=arredondaRaiz
    }

    // monta a frase
    for(let linha=0; linha < arredondaRaiz; linha++){
        for(let coluna=0; coluna < arredondaRaiz; coluna++) {
            if (grid[coluna][linha] == undefined) {
                continue
            }

            fraseEncriptada += grid[coluna][linha]
        }
        fraseEncriptada += " "
    }

    return fraseEncriptada
}