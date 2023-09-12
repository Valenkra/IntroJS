function showCalcEdad(name){
    name = prompt("Como te llamas?");
    if(name == ""){
        name = "Sr/Sra Doe";
    }
    
    age = prompt("En que fecha naciste? Escribilo: AAAA-MM-DD !!");
    while(age == NaN){
        age = prompt("En que fecha naciste? Escribilo: AAAA-MM-DD !!");
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Hola ${name}, tienes ${calcularEdad(age)} años!`;
}