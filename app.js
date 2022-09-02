function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar= 136.00;
    var euro= 137.00;

    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de pesos ARS a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de pesos ARS a Euros es: " + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos nuestros requerimientos")
    }
}