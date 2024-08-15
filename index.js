const express = require('express');
const server = express();

server.get('/', (req,res) =>{
 return res.json({mensagem: 'Cleber é demais né'})}
)

server.listen(3000, () => {
    console.log('Servidor está funcionado... http://localhost:3000/')
});