// Crea una pirámide con N niveles usando bucles
const piramide = ( nivel ) => {

    for (let i = 1; i <= nivel; i++){
    let linea = "";

        for(let a = 0; a < (nivel - i); a++){
            linea += " ";
        }

        for(let b = 0; b < (2*i - 1); b++){
            linea += "*";
        }
        console.log(linea);
    }
}

piramide(6);
