function calcularEdad(edad){
    const age = new Date(edad);
    const date = new Date();
    let year = date.getFullYear() - age.getFullYear();
    if(date.getMonth() < age.getMonth()){
        year += 1;
    } else if(date.getMonth() == age.getMonth() && date.getDay() <= age.getDay()){
        year += 1;
    }
    return year;
}

function tirandoFruta(){
    const resultado = document.getElementById("resultado");
    fruta = prompt("Que fruta buscas");
    const frutas = ["banana", "manzana", "anana", "durazno", "cereza", 
                    "naranja", "frutilla", "sandia", "melon", "pera"];

    if(frutas.find(fruit => fruit == fruta)){
        resultado.innerHTML = `Sí, tenemos ${fruta}!`;
    }else{
        resultado.innerHTML = `No, no tenemos ${fruta}!`;
    }
}

function comparando(){
    let resultado = document.getElementById("resultado");
    resultado = ("10 == '10' : " + (10 == '10'));
    resultado += ("\n 10 === '10' : " + (10 === '10'));
    resultado += ("\n Uno esta comparando el value y otro el tipo. Por eso el primero da true y el segundo false.");
    resultado += ("\n El 10.6 es de tipo : " + typeof 10.6);
    resultado += ("\n true == 1 : " + (true == 1));
}

function yoObjeto(){
    const Ciudad = new Object();
    Ciudad.Nombre = prompt("Cual es el nombre de la ciudad");
    Ciudad.FechaDeFundacion = prompt("En que fecha fue fundado?");
    Ciudad.Poblacion = prompt("Cual es su poblacion por metro cuadrado?");
    Ciudad.Extension = prompt("Cual es su nivel de extension?");

    let res = "";
    for(const item in Ciudad){
        res += `${item} : ${Ciudad[item]} /// `;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = res;
}

function dobleElementos(){
    nums = prompt("Pasame una lista de numeros sepradas por una ',' (coma) para multiplicar por 2");
    numeros = nums.split(',');
    num = []
    for (let index = 0; index < numeros.length; index++) {
        num.push(numeros[index]*2);
    }
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = num;
}

function triangle(rows){
    rows = prompt("Que tan alto queres que sea?");
    rows = (rows > 30) ? 30 : rows;
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

function secondTriangle(rows, margin){
    rows = prompt("Que tan alto queres que sea?");
    margin = prompt("Cuanto margen queres que tenga a los lados?");
    rows = (rows > 31) ? 31 : rows;
    if(rows % 2 == 0){
        alert("It has to be and odd number!");
    }else{
        left = "-".repeat(margin);
        right = "-".repeat(margin);
        for (let i = 1; i <= rows; i+=2) {
            first = "-".repeat((rows-i)/2);
            second = "*".repeat(i);
            third = "-".repeat((rows-i)/2);
            console.log(left+first+second+third+right);
        }
    }
}

function thirdTriangle(rows, repeat){
    rows = prompt("Que tan alto queres que sea?");
    repeat = prompt("Cuantos triangulos queres?");
    rows = (rows > 30) ? 30 : rows;
    for (let i = 1; i <= rows; i++) {
        first = "*".repeat(i);
        second = "#".repeat(rows-i);
        third = "#".repeat(rows-i);
        four = "*".repeat(i);
        console.log((first + second + third + four).repeat(repeat));
    }
}