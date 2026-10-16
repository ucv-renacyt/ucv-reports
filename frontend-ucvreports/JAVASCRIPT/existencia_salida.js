const token = localStorage.getItem("access_token");
if (!token) {
  window.location.replace("/login");
  throw new Error("No token found. Halting script.");
}

import { validateTokenAndRedirect, fetchWithAuth } from "./auth/auth_utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = validateTokenAndRedirect();
  if (!token) {
    console.warn("Token no válido. Cancelando ejecución.");
    return;
  }

  console.log("Token JWT disponible en existencia_salida.js:", token);
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    console.log("ID de usuario (sub) del token:", decodedPayload.sub);
  } catch (error) {
    console.error("Error al decodificar el token JWT:", error);
  }
  const productosGridContainer = document.querySelector(
    ".productos-grid-container"
  );

  function generarCodigoAleatorio() {
    return "COD-" + Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  function generarPrecioAleatorio() {
    return (Math.random() * (500 - 10) + 10).toFixed(2);
  }

  async function cargarProductos() {
    try {
      const response = await fetchWithAuth(
        "https://ucv-reports-backend.onrender.com/hardware"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const productos = await response.json();

      productos.forEach((producto, index) => {
        const productoCard = document.createElement("div");
        productoCard.classList.add("producto-card");

        productoCard.innerHTML = `
                    <img src="${
                      producto.imagen_url ||
                      "../../CSS/auth/images/ordenador.jpg"
                    }" alt="${producto.nombre}">
                    <div class="producto-card-info">
                <h3>Tipo: ${producto.nombre}</h3>
            </div>
                    <button class="btn informe" data-producto-id="${
                      producto.id
                    }" data-producto-nombre="${producto.nombre}">
                        Informe
                    </button>
                `;

        productosGridContainer.appendChild(productoCard);
      });

      const botonesInforme = document.querySelectorAll(
        ".producto-card .btn.informe"
      );
      botonesInforme.forEach((boton) => {
        boton.addEventListener("click", async function () {
          modalStockActual.style.display = "block";

          const productoId = this.dataset.productoId;
          const productoNombre = this.dataset.productoNombre;

          const stockTableBody =
            modalStockActual.querySelector(".stock-table tbody");
          stockTableBody.innerHTML = "";

          const stockData = [
            {
              codigo: generarCodigoAleatorio(),
              nombre: productoNombre,
              estado: "Bueno",
              precio: generarPrecioAleatorio(),
              tipoArticulo: productoNombre,
              accion: "Usar",
            },
          ];

          stockData.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                            <td>${item.codigo}</td>
                            <td>${item.nombre}</td>
                            <td>${item.estado}</td>
                            <td>${item.precio}</td>
                            <td>${item.tipoArticulo}</td>
                            <td><button class="btn usar-articulo">
                                    ${item.accion}
                                </button></td>
                        `;
            stockTableBody.appendChild(row);
          });

          modalStockActual
            .querySelectorAll(".btn.usar-articulo")
            .forEach((botonUsar) => {
              botonUsar.addEventListener("click", function () {
                botonUsarActivo = this;
                modalStockActual.style.display = "none";
                modalSeleccionarUbicacion.style.display = "block";
                limpiarFormularioUbicacion();
                loadPabellonesSalida();
              });
            });
        });
      });
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      productosGridContainer.innerHTML =
        "<p>Error al cargar los productos. Inténtalo de nuevo más tarde.</p>";
    }
  }

  cargarProductos();

  const modalStockActual = document.getElementById("modalStockActual");
  const spanCerrarStockActual = modalStockActual.querySelector(".close");
  const modalSeleccionarUbicacion = document.getElementById(
    "modalSeleccionarUbicacion"
  );
  const spanCerrarUbicacion = modalSeleccionarUbicacion.querySelector(".close");

  if (spanCerrarStockActual) {
    spanCerrarStockActual.onclick = function () {
      modalStockActual.style.display = "none";
    };
  }

  let botonUsarActivo = null;

  function limpiarFormularioUbicacion() {
    document.getElementById("pabellon").value = "";
    document.getElementById("piso").value = "";
    document.getElementById("salon").value = "";
  }

  const selectPabellonSalida = document.getElementById("pabellon");
  const selectPisoSalida = document.getElementById("piso");
  const selectSalonSalida = document.getElementById("salon");

  if (selectPabellonSalida) {
    selectPabellonSalida.addEventListener("change", loadPisosSalida);
  }
  if (selectPisoSalida) {
    selectPisoSalida.addEventListener("change", loadAulasSalida);
  }

  const botonConfirmarUbicacion = modalSeleccionarUbicacion.querySelector(
    ".confirmar-ubicacion"
  );
  if (botonConfirmarUbicacion) {
    botonConfirmarUbicacion.addEventListener("click", function () {
      const pabellonSeleccionado = document.getElementById("pabellon").value;
      const pisoSeleccionado = document.getElementById("piso").value;
      const salonIngresado = document.getElementById("salon").value;

      if (botonUsarActivo) {
        botonUsarActivo.dataset.pabellon = pabellonSeleccionado;
        botonUsarActivo.dataset.piso = pisoSeleccionado;
        botonUsarActivo.dataset.salon = salonIngresado;
        botonUsarActivo.textContent = "Dejar de usar";
        botonUsarActivo = null;
      }

      cerrarModalUbicacion();
    });
  }

  if (spanCerrarUbicacion) {
    spanCerrarUbicacion.onclick = function () {
      cerrarModalUbicacion();
    };
  }

  function cerrarModalUbicacion() {
    modalSeleccionarUbicacion.style.display = "none";
  }

  async function loadPabellonesSalida() {
    try {
      const response = await fetchWithAuth(
        "https://ucv-reports-backend.onrender.com/pabellon"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const pabellones = await response.json();
      selectPabellonSalida.innerHTML =
        '<option value="">Seleccione un pabellón</option>';
      pabellones.forEach((pabellon) => {
        const option = document.createElement("option");
        option.value = pabellon.id;
        option.textContent = pabellon.Pabellon;
        selectPabellonSalida.appendChild(option);
      });
    } catch (error) {
      console.error("Error al cargar los pabellones:", error);
      alert(
        "Error al cargar los pabellones. Revisa la consola para más detalles."
      );
    }
  }

  async function loadPisosSalida() {
    const selectedPabellonId = selectPabellonSalida.value;
    selectPisoSalida.innerHTML = '<option value="">Seleccione un piso</option>';
    selectPisoSalida.disabled = true;

    if (!selectedPabellonId) {
      return;
    }

    try {
      const response = await fetchWithAuth(
        "https://ucv-reports-backend.onrender.com/piso"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const pisos = await response.json();
      const filteredPisos = pisos.filter(
        (piso) => piso.idpabellon == selectedPabellonId
      );

      selectPisoSalida.disabled = false;
      filteredPisos.forEach((piso) => {
        const option = document.createElement("option");
        option.value = piso.numero_piso;
        option.textContent = piso.numero_piso;
        selectPisoSalida.appendChild(option);
      });
    } catch (error) {
      console.error("Error al cargar los pisos:", error);
      alert("Error al cargar los pisos. Revisa la consola para más detalles.");
    }
  }

  async function loadAulasSalida() {
    const selectedPabellonId = selectPabellonSalida.value;
    const selectedPisoNumber = selectPisoSalida.value;
    selectSalonSalida.innerHTML =
      '<option value="">Seleccione un salón</option>';
    selectSalonSalida.disabled = true;

    if (!selectedPabellonId || !selectedPisoNumber) {
      return;
    }

    try {
      const response = await fetchWithAuth(
        "https://ucv-reports-backend.onrender.com/salon"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const aulas = await response.json();
      const filteredAulas = aulas.filter(
        (aula) =>
          aula.idpabellon == selectedPabellonId &&
          aula.idpiso == selectedPisoNumber
      );

      selectSalonSalida.disabled = false;
      filteredAulas.forEach((aula) => {
        const option = document.createElement("option");
        option.value = aula.nombre;
        option.textContent = aula.nombre;
        selectSalonSalida.appendChild(option);
      });
    } catch (error) {
      console.error("Error al cargar los salones:", error);
      alert(
        "Error al cargar los salones. Revisa la consola para más detalles."
      );
    }
  }

  window.onclick = function (event) {
    if (event.target == modalStockActual) {
      modalStockActual.style.display = "none";
    }
    if (event.target == modalSeleccionarUbicacion) {
      cerrarModalUbicacion();
    }
  };

  modalSeleccionarUbicacion.addEventListener("show", loadPabellonesSalida);
});
