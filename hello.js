var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200);
	response.write("Escrevendo uma resposta");
	setTimeout(function(){
		response.write("Escrevendo uma resposta depois de 5 segundos");
		response.end();
	}, 5000);
	
}).listen(8080);

console.log('Escutando por requests na porta 8080');