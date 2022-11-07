let Carne = "14 segundos"

let resultado = Carne == "Pipoca"? "15 segundos" : "2 segundos a mais"

switch (Carne){
    case "15 segundos":
        console.log("Prato pronto, bom apetite!!!");
        break;
    case "14 segundos":
        console.log("tempo insuficiente");
         break;    
    case "30 segundos":
        console.log("A comida queimou!");
        break;
    case "45 segundos":
        console.log("kabumm");
        break;        
}   