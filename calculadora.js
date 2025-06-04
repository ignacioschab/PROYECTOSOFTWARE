document.getElementById("calculadora").onsubmit = function(e) {
    e.preventDefault();

    const bruto = parseFloat(document.getElementById("bruto").value);
    const sindicatoPorc = parseFloat(document.getElementById("sindicato").value);
    const sindicato = sindicatoPorc / 100;
    const hijos = parseInt(document.getElementById("hijos").value);
    const alquiler = parseFloat(document.getElementById("alquiler").value);
    const vacaciones = parseInt(document.getElementById("vacaciones").value);
    const turno = document.getElementById("turno").value;
    const extras = parseInt(document.getElementById("extras").value);
    const antiguedad = parseInt(document.getElementById("antiguedad").value);

    let neto = bruto;

   
    const aporteSindicato = bruto * sindicato;
    neto -= aporteSindicato;

    
    const asignacionHijos = bruto * 0.08 * hijos;
    neto += asignacionHijos;

   
    const deduccionAlquiler = alquiler * 0.10;
    neto += deduccionAlquiler;

   
    const extraVacaciones = (bruto * 0.02 * vacaciones) / 12;
    neto += extraVacaciones;


    const extraNoche = (turno === "noche") ? bruto * 0.20 : 0;
    neto += extraNoche;

    const extraHoras = bruto * 0.04 * extras;
    neto += extraHoras;

    const extraAntiguedad = bruto * 0.01 * antiguedad;
    neto += extraAntiguedad;

 
    const netoAnual = neto * 12;
    const ingresoMensualPromedio = netoAnual / 12;

    document.getElementById("resultado").innerHTML =
        `<ul>
            <li><b>Salario bruto:</b> $${bruto.toFixed(2)}</li>
            <li><b>Aporte a la jubilación (sindicato):</b> $${aporteSindicato.toFixed(2)} (${sindicatoPorc}%)</li>
            <li><b>Sueldo neto mensual estimado:</b> $${neto.toFixed(2)}</li>
            <li><b>Sueldo neto anual estimado:</b> $${netoAnual.toFixed(2)}</li>
            <li><b>Ingreso mensual promedio:</b> $${ingresoMensualPromedio.toFixed(2)}</li>
        </ul>`;
};