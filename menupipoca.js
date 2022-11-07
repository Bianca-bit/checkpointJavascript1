let Pipoca = "10 segundos"

let resultado = Pipoca == "Pipoca"? "10 segundos" : "2 segundos a mais"

switch (Pipoca){
    case "10 segundos":
        console.log("Prato pronto, bom apetite!!!");
        break;
    case "9 segundos":
        console.log("tempo insuficiente");
        break;       
    case "12 segundos":
        console.log("A comida queimou!");
        break;
    case "30 segundos":
        console.log("kabumm");
        break;        
}   