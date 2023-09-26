function calcularEdad(age){
    const date = new Date();
    let year = date.getFullYear() - age.getFullYear();
    if(date.getMonth() < age.getMonth()){
        year += 1;
    } else if(date.getMonth() == age.getMonth() && date.getDay() <= age.getDay()){
        year += 1;
    }
    return year;
}

function tirandoFruta(frut){
    const resultado = document.getElementById("resultado");
    let fruta = document.getElementById(frut).value;
    const frutas = ["banana", "manzana", "anana", "durazno", "cereza", 
                    "naranja", "frutilla", "sandia", "melon", "pera"];

    if(fruta != ""){
        if(frutas.find(fruit => fruit == fruta)){
            resultado.innerHTML = `Sí, tenemos ${fruta}!`;
        }else{
            resultado.innerHTML = `No, no tenemos ${fruta}!`;
        }
    }else {
        resultado.innerHTML = `Falta información, por favor rellená todos los inputs necesarios.`;
    }
}

function comparando(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ("10 == '10' : " + (10 == '10') + "<br>");
    resultado.innerHTML += ("10 === '10' : " + (10 === '10') + "<br>");
    resultado.innerHTML += ("Uno esta comparando el value y otro el tipo. Por eso el primero da true y el segundo false." + "<br>");
    resultado.innerHTML += ("El 10.6 es de tipo : " + typeof 10.6  + "<br>");
    resultado.innerHTML += ("true == 1 : " + (true == 1));
}

function yoObjeto(name, date, popu, ext){
    let nombre = document.getElementById(name).value;
    let fecha = document.getElementById(date).value;
    let population = document.getElementById(popu).value;
    let extent = document.getElementById(ext).value;
    const fechaFundacion = new Date(fecha);
    const Ciudad = new Object();

    Ciudad.Nombre = nombre;
    Ciudad.FechaDeFundacion = fechaFundacion.toISOString().split('T')[0];
    Ciudad.Poblacion = population;
    Ciudad.Extension = extent

    let res = "";
    for(const item in Ciudad){
        res += `${item}: ${Ciudad[item]} <br>`;
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

function triangle(row){
    let rows = document.getElementById(row).value;
    alert("Abrí la consola!");
    rows = (rows > 30) ? 30 : rows;
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

function secondTriangle(row, marg){
    let rows = document.getElementById(row).value;
    let margin = document.getElementById(marg).value;
    rows = (rows > 31) ? 31 : rows;
    if(rows % 2 == 0){
        alert("It has to be and odd number!");
    }else{
        alert("Abrí la pantalla");
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

function thirdTriangle(row, rept){
    let rows = document.getElementById(row).value;
    let repeat = document.getElementById(rept).value;
    alert("Abrí la consola!");
    rows = (rows > 30) ? 30 : rows;
    for (let i = 1; i <= rows; i++) {
        first = "*".repeat(i);
        second = "#".repeat(rows-i);
        third = "#".repeat(rows-i);
        four = "*".repeat(i);
        console.log((first + second + third + four).repeat(repeat));
    }
}

function textoACortar(texto, cantACortar){
    const text = document.getElementById(texto).value;
    const cant = document.getElementById(cantACortar).value;

    const resultado = document.getElementById("resultado");
    if(text == "" || cant === NaN){
        resultado.innerHTML = `Falta información, por favor rellená todos los inputs necesarios.`;
    }else {
        resultado.innerHTML = `${text.substring(0,cantACortar)}`;
    }
}