function compute()
{
	//Crear variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //Calcular
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    //Validar el valor principal
    if(principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    
    //Formula de interes compuesto
    var compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))

    //Armar y mostrar resultado
    document.getElementById("result").innerHTML = `<br>If you deposit <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${year}
    </mark><br>`;
}

function updateRate() 
{
    //Muestra actualizado el valor del rango
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
