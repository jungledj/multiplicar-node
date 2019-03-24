// Tipos de requires

const fs = require('fs'); // Los standar de NODEJS
//const fs = require('express')  // Los desarrollados por terceros, no son nativos NODE
//const fs = require('./fs')  // Los desarrollados por mi

let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}

fs.writeFile(`tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado`);
});