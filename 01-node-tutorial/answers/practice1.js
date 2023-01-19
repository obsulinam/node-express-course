const sentence = require('./practice2');
const fs = require('fs');
const os = require('os');

const contenido = `${sentence} ${os.userInfo().username}`;
//console.log(contenido)
fs.writeFile( './content/practice.txt', contenido, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('proceso exitoso');
    }
}, );