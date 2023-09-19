function showCalcEdad(name, fecha){
    const nombre = document.getElementById(name).value;
    const date = document.getElementById(fecha).value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Hola ${nombre}, tienes ${calcularEdad(date)} años!`;
}