const http = require('http');
const express = require('express');
const ws = require('ws');
const process = require('process')


const app = express();

const httpServer=http.createServer(app);

const webSocketServer = ws.createServer(httpServer);

app.get('/ping',(request,response)=>{
    response.sendStatus(200);
});


const PORT = 8080;
httpServer.listen(PORT, ()=>{
    console.log('GenericX backend running on port '+PORT);
    console.log(process.report);
})




