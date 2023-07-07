// ex 1
console.log("\nExercicio 1\n")

function calcularSoma(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}


const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSoma(...numeros);
console.log(resultado);

// ex 2
console.log("\nExercicio 2\n")

function imprimirValores(primeiro, segundo, ...outros) {
    console.log(`Primeiro valor: ${primeiro}`);
    console.log(`Segundo valor: ${segundo}`);
    console.log(`Outros valores: ${outros}`);
}

imprimirValores(1, 2, 3, 4, 5);

// ex 3
console.log("\nExercicio 3\n")

const nomes = ["João", "Maria", "Pedro", "Ana"];

nomes.forEach((nome, index) => {
    console.log(`Nome ${index + 1}: ${nome}`);
});

// ex 4
console.log("\nExercicio 4\n")

const valores = [1, 2, 3, 4, 5];

const quadrados = valores.map((valor) => {
    return valor ** 2;
});

console.log(quadrados);

// ex 5

console.log("\nExercicio 5\n")

const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

const frutasComB = frutas.filter((fruta) => {
    return fruta.includes("b");
});

console.log(frutasComB);

// ex 6
console.log("\nExercicio 6\n")

const frutaEncontrada = frutas.find((fruta) => {
    return fruta === "laranja";
});

console.log(`Fruta encontrada: ${frutaEncontrada}`);

// ex 7
console.log("\nExercicio 7\n")

const numbers = [1, 2, 3, 4, 5];

const soma = numbers.reduce((acumulador, number) => {
    return acumulador + number;
}, 0);

console.log(soma);

// ex 8
console.log("\nExercicio 8\n")

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John Doe", age: 30 };
            resolve(data);
        }, 2000);
    });
};

fetchData()
    .then(data => {
        console.log('Dados obtidos com sucesso:', data);
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });


// ex 9
console.log("\nExercicio 9\n")

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function exemploAssincrono() {
    console.log("Início da função assíncrona");

    await delay(2000);

    console.log("Após a espera assíncrona");

    return "Fim da função assíncrona";
}

exemploAssincrono()
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error("Ocorreu um erro:", error);
    });


// ex 10
console.log("\nExercicio 10\n")

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function exemploComAwait() {
    console.log("Início da função com Await");

    await delay(2000);

    console.log("Após a espera com Await");

    return "Fim da função com Await";
}

async function exemploPrincipal() {
    try {
        console.log("Início do exemplo principal");

        const resultado = await exemploComAwait();
        console.log(resultado);

        console.log("Fim do exemplo principal");
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

exemploPrincipal();