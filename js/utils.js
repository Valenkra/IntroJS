function showCalcEdad(name, fecha){
    const nombre = document.getElementById(name).value;
    const date = document.getElementById(fecha).value;
    const age = new Date(date);
    const resultado = document.getElementById("resultado");
    if(nombre == "" || isValidDate(age) == false){
        resultado.innerHTML = `Falta información, por favor rellená todos los inputs necesarios.`;
    }else {
        resultado.innerHTML = `Hola ${nombre}, tienes ${calcularEdad(age)} años!`;
    }
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }