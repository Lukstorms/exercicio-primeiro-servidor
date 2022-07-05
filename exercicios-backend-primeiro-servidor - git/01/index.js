const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = 0

app.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[contador]} jogar!`);
    if (contador < jogadores.length - 1) {
        contador++
    } else {
        contador = 0
    }
});

app.listen(3000, () => {
    console.log("Servidor inicializado na porta 3000");
});