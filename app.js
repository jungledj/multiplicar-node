// Tipos de requires

const fs = require('fs'); // Los standar de NODEJS
//const fs = require('express')  // Los desarrollados por terceros, no son nativos NODE
//const fs = require('./fs')  // Los desarrollados por mi

let base = 3;

for (let i = 1; i <= 10; i++) {
    console.log(`${ base } * ${ i } = ${ base * i } `);
}

fs.writeFile('tabla-2.txt', 'hola mundo', (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2.txt ha sido creado');
});