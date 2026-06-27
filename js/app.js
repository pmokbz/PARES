const modulos = {
  diagnostico: true,
  academia: false,
  herramientas: false,
  ia: false,
  crm: false,
  evidencias: false,
  plannegocio: false,
  dashboard: false,
  certificaciones: false
};

console.log("Estado de módulos PARES Suite:", modulos);

function calcularDiagnostico() {
  const rangos = document.querySelectorAll(".pares-range");
  let suma = 0;

  rangos.forEach(rango => {
    suma += Number(rango.value);
  });

  const promedio = suma / rangos.length;
  const porcentaje = Math.round((promedio / 5) * 100);

  let nivel = "";
  let recomendacion = "";

  if (porcentaje <= 20) {
    nivel = "Nivel 1: Emprendimiento inicial";
    recomendacion = "Conviene iniciar con orden básico, confianza emprendedora y definición del producto o servicio.";
  } else if (porcentaje <= 40) {
    nivel = "Nivel 2: Emprendimiento en desarrollo";
    recomendacion = "Se recomienda fortalecer planificación, ventas, costos y primeros indicadores.";
  } else if (porcentaje <= 60) {
    nivel = "Nivel 3: Emprendimiento en consolidación";
    recomendacion = "El siguiente paso es formalizar procesos, medir avances y mejorar la propuesta de valor.";
  } else if (porcentaje <= 80) {
    nivel = "Nivel 4: Emprendimiento competitivo";
    recomendacion = "Puede avanzar hacia digitalización, seguimiento de clientes e integración ambiental.";
  } else {
    nivel = "Nivel 5: Emprendimiento referente";
    recomendacion = "Tiene condiciones para convertirse en caso de éxito, mentoría o modelo replicable.";
  }

  const resultado = document.getElementById("resultadoDiagnostico");
  resultado.classList.remove("d-none");
  resultado.innerHTML = `
    <h4>Resultado preliminar</h4>
    <p><strong>Puntaje:</strong> ${porcentaje}%</p>
    <p><strong>${nivel}</strong></p>
    <p>${recomendacion}</p>
  `;
}
