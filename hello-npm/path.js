import { basename, dirname } from "path";

let nomeArquivo = basename("./teste.txt");
let filename = basename("/test/something");

let dir = dirname("/test/something");
let diretorio = dirname("/test/something");

console.log("nome do arquivo -> " + nomeArquivo);
console.log("filename > " + filename);
console.log("dir > " + dir);
console.log("diretorio > " + diretorio);
