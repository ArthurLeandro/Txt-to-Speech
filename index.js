//exemplo: node index.js  ./books/books-txt/teste.txt teste1
const say = require('say');
const fs = require('fs');
if (process.argv.lenght < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
var filename = process.argv[2]; //nome do arquivo em txt
const PATH = "./books/audio/";// LOCAL ONDE SERÁ EXPORTADO
var name = process.argv[3];
const TYPE = ".wav"; //EXTENSÃO DO ARQUIVO
//leitura do filename
fs.readFile(filename, "utf8", function (err, data) {
  if (err) {
    throw err;  
  }
  say.export(data,"Cellos",2.0,PATH+name+TYPE);  
  console.log("Process was over.");
});





// var fileContent = fs.readFileSync('C:\Users\arthur\Documents\applications\txt-text-to-speech-bot\books\books-txt\Extending Unity with Editor.txt');
// say.export(fileContent,"Cellos",2.0,"./books/audio/teste.wav");

// say.export(data, 2.0, pathToExport, (err) => {
  //   if (err){
  //     return console.log(err);
  //   }
  //   console.log('Text has been spooken.');
  // });