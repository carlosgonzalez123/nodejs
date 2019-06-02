const opciones = {
    matematicas:{
        default: 0,
        alias: 'm',
    },
}

const argv = require('yargs')
            .command('promedio','Calcular el promedio',opciones)
            .argv

console.log(argv.m);


