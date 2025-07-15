// script.js

const cursos = [
  // Aquí van todos tus cursos tal como ya los tienes definidos...
  // (no repito el array completo para ahorrar espacio)
  // IMPORTANTE: conserva el array tal como me lo diste antes
];

function cargarCursos() {
  const contenedor = document.getElementById("grid");
  contenedor.innerHTML = "";

  const ciclos = [...new Set(cursos.map(c => c.ciclo))].sort((a, b) => a - b);

  ciclos.forEach(ciclo => {
    const columna = document.createElement("div");
    columna.className = "columna-ciclo";
    const encabezado = document.createElement("h2");
    encabezado.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(encabezado);

    const cursosDelCiclo = cursos.filter(c => c.ciclo === ciclo);
    cursosDelCiclo.forEach(curso => {
      const div = document.createElement("div");
      div.className = "course locked";
      div.id = curso.id;

      const titulo = document.createElement("h3");
      titulo.textContent = curso.nombre;

      const boton = document.createElement("button");
      boton.textContent = "Aprobar";
      boton.onclick = () => aprobarCurso(curso.id);

      div.appendChild(titulo);
      div.appendChild(boton);
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });

  actualizarEstadoCursos();
}

function aprobarCurso(id) {
  localStorage.setItem(id, "true");
  actualizarEstadoCursos();
}

function estaAprobado(id) {
  return localStorage.getItem(id) === "true";
}

function actualizarEstadoCursos() {
  cursos.forEach(curso => {
    const div = document.getElementById(curso.id);
    if (!div) return;

    const cumplidos = curso.prerrequisitos.every(pr => estaAprobado(pr));

    if (cumplidos) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }

    if (estaAprobado(curso.id)) {
      div.classList.add("aprobado");
    } else {
      div.classList.remove("aprobado");
    }
  });
}

// Inicializar
window.onload = cargarCursos;
