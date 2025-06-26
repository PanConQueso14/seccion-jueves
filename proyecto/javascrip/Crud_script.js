// Simulación de base de datos en memoria
let datos = [];
let accionPendiente = null;

function buscar() {
  const id = document.getElementById("id").value;
  const resultado = datos.find(d => d.id === id);
  if (resultado) {
    document.getElementById("nombre").value = resultado.nombre;
    document.getElementById("correo").value = resultado.correo;
    alert("Usuario encontrado");
  } else {
    alert("Usuario no encontrado");
  }
}

function confirmarAccion(accion) {
  accionPendiente = accion;
  document.getElementById("popup").style.display = "block";
}

function ejecutarAccion() {
  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if (!id) {
    alert("Por favor, ingresa un ID.");
    return;
  }

  if (accionPendiente === "eliminar") {
    datos = datos.filter(d => d.id !== id);
  }

  if (accionPendiente === "editar") {
    const index = datos.findIndex(d => d.id === id);
    if (index !== -1) {
      datos[index] = { id, nombre, correo };
    } else {
      // Solo agrega si hay menos de 5
      if (datos.length < 5) {
        datos.push({ id, nombre, correo });
      } else {
        alert("Máximo de 5 usuarios alcanzado. No se puede agregar más.");
      }
    }
  }

  accionPendiente = null;
  document.getElementById("popup").style.display = "none";
  actualizarTabla();
}

function actualizarTabla() {
  const tbody = document.getElementById("tabla-datos");
  tbody.innerHTML = "";

  // Siempre mostrar 5 filas, aunque estén vacías
  for (let i = 0; i < 5; i++) {
    const fila = datos[i];
    const tr = document.createElement("tr");

    if (fila) {
      tr.innerHTML = `<td>${fila.id}</td><td>${fila.nombre}</td><td>${fila.correo}</td>`;
    } else {
      tr.innerHTML = "<td></td><td></td><td></td>";
    }

    tbody.appendChild(tr);
  }
}
