let Feijao = "12 segundos"

let resultado = Feijao == "Pipoca"? "12 segundos" : "2 segundos a mais"

switch (Feijao){
    case "12 segundos":
        console.log("Prato pronto, bom apetite!!!");
        break;
    case "11 segundos":
        console.log("tempo insuficiente");
         break;    
    case "24 segundos":
        console.log("A comida queimou!");
        break;
    case "36 segundos":
        console.log("kabumm");
        break;        
}   