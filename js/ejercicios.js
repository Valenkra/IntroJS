function calcularEdad(name, edad){
    name = document.getElementById(name).value;
    edad = document.getElementById(edad).value;
    const age = new Date(edad);
    const date = new Date();
    let year = date.getFullYear() - age.getFullYear();
    if(date.getMonth() < age.getMonth()){
        year += 1;
    } else if(date.getMonth() == age.getMonth() && date.getDay() <= age.getDay()){
        year += 1;
    }
    console.log(`Hola ${name}, tienes ${year} años!`);
}

function tirandoFruta(fruta){
    fruta = document.getElementById(fruta).value;
    const frutas = ["banana", "manzana", "anana", "durazno", "cereza", 
                    "naranja", "frutilla", "sandia", "melon", "pera"];

    if(frutas.find(fruit => fruit == fruta)){
        console.log(`Sí, tenemos ${fruta}!`);
    }else{
        console.log(`No, no tenemos ${fruta}!`);
    }
}

function comparando(){
    console.log("10 == '10' : " + (10 == '10'));
    console.log("10 === '10' : " + (10 === '10'));
    console.log("Uno esta comparando el value y otro el tipo. Por eso el primero da true y el segundo false.");
    console.log("El 10.6 es de tipo : " + typeof 10.6);
    console.log("true == 1 : " + (true == 1));
}

function yoObjeto(){

}

function dobleElementos(nums){
    return nums.filter(num => num * 2);
}

function triangle(rows){
    rows = document.getElementById(rows).value;
    rows = (rows > 30) ? 30 : rows;
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

function secondTriangle(margin, rows){
    rows = document.getElementById(rows).value;
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
    rows = document.getElementById(rows).value;
    rows = (rows > 30) ? 30 : rows;
    for (let i = 1; i <= rows; i++) {
        first = "*".repeat(i);
        second = "#".repeat(rows-i);
        third = "#".repeat(rows-i);
        four = "*".repeat(i);
        console.log((first + second + third + four).repeat(repeat));
    }
}

// Ejecutando funciones:
console.log("Tenes " + calcularEdad('2007-04-12') + " años");
console.log("");
comparando();
console.log("");
triangle(10);
console.log("");
secondTriangle(0,15);
console.log("");
secondTriangle(3,15);
console.log("");
thirdTriangle(10,3);
console.log("");
console.log(dobleElementos([1,2,3,4,5]));