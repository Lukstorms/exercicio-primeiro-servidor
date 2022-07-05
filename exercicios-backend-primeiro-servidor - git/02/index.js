const express = require('express');

const app = express();

let timer = 0;


let contando = false



app.get('/', (req, res) => {
    res.send(`tempo atual do cronômetro é ${timer}`);
});

app.get('/iniciar', (req, res) => {
    res.send('Cronômetro iniciado!');
    clearInterval(timer)
    timer = setInterval(() => {
        timer++
    }, 1000);
    contando = true

});

app.get('/pausar', (req, res) => {
    res.send('Cronômetro pausado');
    clearInterval(timer)

    contando = false
});

app.get('/continuar', (req, res) => {
    if (contando === false) {
        timer = setInterval(() => {
            timer++
        }, 1000);
        contando = true
    }
    res.send('Crônometro continuando');
});

app.get('/zerar', (req, res) => {
    clearInterval(timer)
    timer = 0
    res.send('Cronômetro zerado');
});

app.listen(8000, () => {
    console.log("Servidor inicializado na porta 8000");
});