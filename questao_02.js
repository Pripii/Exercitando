function pegaQtdDeParesComBaseNaDiferenca(numeros, diferenca) {
    // Inicializa a lista de pares    
    pares = []

    // percorre os números
    numeros.forEach(function(x) {

        // percorre o numero posterior
        numeros.forEach(function(y) {

            // compara a diferença
            if ((x-y) == diferenca) {

                // coloca dentro da lista de pares
                pares.push([x, y])
            }
        })
    })

    return pares.length
}