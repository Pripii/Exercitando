function encontraMediana(numeros) {
    // Ordena por ordem crescente
    numerosOrdenados = numeros.sort(function (a, b) { return a-b })

    // pega o tamanho da lista dos números ordenados
    quantidadeDeNumeros = numerosOrdenados.length

    // pega a mediana
    mediana = Math.round(quantidadeDeNumeros/2)

    return numerosOrdenados[mediana-1]
}