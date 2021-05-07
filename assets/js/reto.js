//Text =0
//Numer = 1
let typeInput = 0

//container letras y numeros
let words = document.getElementById('words')
let numbers =  document.getElementById('numbers')

//variables botones
let btn1A = document.getElementById('btn1A')
let btn2B = document.getElementById('btn2B')
let btn3C = document.getElementById('btn3C')
let btn4D = document.getElementById('btn4D')
let btn5E = document.getElementById('btn5E')
let btn6F = document.getElementById('btn6F')
let btn7G = document.getElementById('btn7G')
let btn8H = document.getElementById('btn8H')
let btn9I = document.getElementById('btn9I')
let btn0J = document.getElementById('btn0J')

//strings temporales
let tempLetras = ""
let tempNumeros = ""

//functiones advertencia
const msjOrden = () =>{
    alert("No es el orden correcto")
}

const msjExiste = () =>{
    alert("Este dato y existe")
}

//funciones ,we considered the ASCII Tables to identify if the characters are typed in correct order
const btn1Af = () =>{
    if(typeInput === 0){
        if(!tempLetras.includes("A")){
        tempLetras += "A"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("A")) msjExiste()
        else msjOrden()
}
    else if (typeInput === 1){
        if(tempNumeros.includes("1")===false){
            tempNumeros += "1"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("1")) msjExiste()
        else msjOrden()  
        }
}

const btn2Bf = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "B".charCodeAt(0)-1 ){
        tempLetras += "B"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("B")) msjExiste()
        else msjOrden()
} 
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "2".charCodeAt(0)-1 ){
            tempNumeros += "2"
            numbers.innerHTML = tempNumeros }
        else if(tempNumeros.includes("2")) msjExiste()
        else msjOrden()
        }
    }

const btn3Cf = () =>{
    if(typeInput === 0){

        if(tempLetras.charCodeAt(tempLetras.length-1) === "C".charCodeAt(0)-1){
            tempLetras += "C"
            words.innerHTML = tempLetras}
        else if(tempLetras.includes("C")) msjExiste()
        else msjOrden() 
    }   
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "3".charCodeAt(0)-1){
            tempNumeros += "3"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("3")) msjExiste()
        else msjOrden()
    }
}

const btn4Df = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "D".charCodeAt(0)-1){
        tempLetras += "D"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("D")) msjExiste()
        else msjOrden() 
    }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "4".charCodeAt(0)-1){
            tempNumeros += "4"
            numbers.innerHTML = tempNumeros}   
        else if(tempNumeros.includes("4")) msjExiste()
        else msjOrden()
        }  
}

const btn5Ef = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "E".charCodeAt(0)-1){
        tempLetras += "E"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("E")) msjExiste()
        else msjOrden()   
    }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "5".charCodeAt(0)-1){
            tempNumeros += "5"
            numbers.innerHTML = tempNumeros} 
        else if(tempNumeros.includes("5")) msjExiste() 
        else msjOrden()
        }
}

const btn6Ff = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "F".charCodeAt(0)-1){
        tempLetras += "F"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("F")) msjExiste()
        else msjOrden()
    }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "6".charCodeAt(0)-1){
            tempNumeros += "6"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("6")) msjExiste()
        else msjOrden()
        }
        
    
}

const btn7Gf = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "G".charCodeAt(0)-1){
        tempLetras += "G"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("G")) msjExiste()
        else msjOrden()
    }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "7".charCodeAt(0)-1){
            tempNumeros += "7"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("7")) msjExiste()
        else msjOrden() 
            
        }  
}

const btn8Hf = () =>{
    if(typeInput === 0){

        if(tempLetras.charCodeAt(tempLetras.length-1) === "H".charCodeAt(0)-1){
            tempLetras += "H"
            words.innerHTML = tempLetras}
        else if(tempLetras.includes("H")) msjExiste()
        else msjOrden()  }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "8".charCodeAt(0)-1){
            tempNumeros += "8"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("8")) msjExiste()
        else msjOrden()
        }  
}

const btn9If = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "I".charCodeAt(0)-1){
        tempLetras += "I"
        words.innerHTML = tempLetras}
        else if(tempLetras.includes("I")) msjExiste()
        else msjOrden()
    
    }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "9".charCodeAt(0)-1){
            tempNumeros += "9"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("9")) msjExiste()
        else msjOrden()  
        }
}

const btn0Jf = () =>{
    if(typeInput === 0){
        if(tempLetras.charCodeAt(tempLetras.length-1) === "J".charCodeAt(0)-1){
            tempLetras += "J"
            words.innerHTML = tempLetras
            typeInput = 1}
        else if(tempLetras.includes("J")) msjExiste()
        else msjOrden() 
    }
    else if (typeInput === 1){
        if(tempNumeros.charCodeAt(tempNumeros.length-1) === "0".charCodeAt(0)+9){
            tempNumeros += "0"
            numbers.innerHTML = tempNumeros}
        else if(tempNumeros.includes("0")) msjExiste()
        else msjOrden()
        }
}


//onclick 
btn1A.onclick = () =>{
    btn1Af();
};
btn2B.onclick = () =>{
    btn2Bf();
};
btn3C.onclick = () =>{
    btn3Cf();
};
btn4D.onclick = () =>{
    btn4Df();
};
btn5E.onclick = () =>{
    btn5Ef()
};
btn6F.onclick = () =>{
    btn6Ff()
};
btn7G.onclick = () =>{
    btn7Gf()
};
btn8H.onclick = () =>{
    btn8Hf()
};
btn9I.onclick = () =>{
    btn9If()
};
btn0J.onclick = () =>{
    btn0Jf()
};