let Brigadeiro = "24 segundos"

let resultado = Brigadeiro == "Pipoca"? "8 segundos" : "2 segundos a mais"

switch (Brigadeiro){
    case "8 segundos":
        console.log("Prato pronto, bom apetite!!!");
        break;
    case "7 segundos":
        console.log("tempo insuficiente");
         break;    
    case "16 segundos":
        console.log("A comida queimou!");
        break;
    case "24 segundos":
        console.log("kabumm");
        break;        
}   