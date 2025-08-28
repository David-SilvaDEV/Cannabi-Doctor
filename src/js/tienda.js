document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-ver-tienda");
    const sectionTiendas = document.getElementById("tienda-info");
  
    botones.forEach((btn) => {
      btn.addEventListener("click", () => {
        sectionTiendas.style.display = "block";
        // Opcional: puedes cambiar el título dinámicamente según el producto
        const producto = btn.getAttribute("data-producto");
        sectionTiendas.querySelector("h4").textContent = `Tiendas disponibles para ${producto}`;
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-ver-tienda");
    const modal = document.getElementById("modal-tienda");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");
  
    const dataTiendas = {
        "Aceite de CBD": [
          { nombre: "Tienda Verde Natural", precio: "$45.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Aceite%20de%20CBD" },
          { nombre: "Salud Orgánica", precio: "$44.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Aceite%20de%20CBD" }
        ],
        "Aceite CBD + THC": [
          { nombre: "Green Pharma", precio: "$55.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Aceite%20CBD%20+%20THC" },
          { nombre: "Cannabis Medic", precio: "$54.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Aceite%20CBD%20+%20THC" }
        ],
        "Cápsulas de CBD": [
          { nombre: "Wellness Store", precio: "$38.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Cápsulas%20de%20CBD" },
          { nombre: "Farmacia Natural", precio: "$37.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Cápsulas%20de%20CBD" }
        ],
        "Cápsulas CBD + THC": [
          { nombre: "Tienda Verde Natural", precio: "$42.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Cápsulas%20CBD%20+%20THC" },
          { nombre: "Green Pharma", precio: "$41.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Cápsulas%20CBD%20+%20THC" }
        ],
        "Cápsulas blandas de CBD": [
          { nombre: "Salud Orgánica", precio: "$40.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Cápsulas%20blandas%20de%20CBD" },
          { nombre: "Wellness Store", precio: "$39.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Cápsulas%20blandas%20de%20CBD" }
        ],
        "Flor rica en CBD": [
          { nombre: "Green Pharma", precio: "$28.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Flor%20rica%20en%20CBD" },
          { nombre: "Cannabis Medic", precio: "$27.500", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Flor%20rica%20en%20CBD" }
        ],
        "Flor con ratio THC:CBD": [
          { nombre: "Wellness Store", precio: "$30.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Flor%20con%20ratio%20THC:CBD" },
          { nombre: "Green Pharma", precio: "$29.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Flor%20con%20ratio%20THC:CBD" }
        ],
        "Extracto concentrado": [
          { nombre: "Salud Orgánica", precio: "$70.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Extracto%20concentrado" },
          { nombre: "Farmacia Natural", precio: "$68.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Extracto%20concentrado" }
        ],
        "Gomitas con CBD": [
          { nombre: "Tienda Verde Natural", precio: "$25.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Gomitas%20con%20CBD" },
          { nombre: "Green Pharma", precio: "$24.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Gomitas%20con%20CBD" }
        ],
        "Chocolate/gomita con THC + CBD": [
          { nombre: "Cannabis Medic", precio: "$35.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Chocolate%20gomita%20con%20THC%20+%20CBD" },
          { nombre: "Green Pharma", precio: "$34.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Chocolate%20gomita%20con%20THC%20+%20CBD" }
        ],
        "Tintura de CBD en alcohol": [
          { nombre: "Salud Orgánica", precio: "$32.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Tintura%20de%20CBD%20en%20alcohol" },
          { nombre: "Wellness Store", precio: "$31.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Tintura%20de%20CBD%20en%20alcohol" }
        ],
        "Tintura de CBD en glicerina": [
          { nombre: "Tienda Verde Natural", precio: "$33.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Tintura%20de%20CBD%20en%20glicerina" },
          { nombre: "Cannabis Medic", precio: "$32.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Tintura%20de%20CBD%20en%20glicerina" }
        ],
        "Té de CBD": [
          { nombre: "Wellness Store", precio: "$20.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20T%C3%A9%20de%20CBD" },
          { nombre: "Farmacia Natural", precio: "$19.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20T%C3%A9%20de%20CBD" }
        ],
        "Bebida carbonatada con CBD": [
          { nombre: "Green Pharma", precio: "$18.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Bebida%20carbonatada%20con%20CBD" },
          { nombre: "Tienda Verde Natural", precio: "$17.500", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Bebida%20carbonatada%20con%20CBD" }
        ],
        "Café infusionado con CBD": [
          { nombre: "Salud Orgánica", precio: "$22.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Cafe%20infusionado%20con%20CBD" },
          { nombre: "Wellness Store", precio: "$21.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Cafe%20infusionado%20con%20CBD" }
        ],
        "Crema con CBD": [
          { nombre: "Farmacia Natural", precio: "$27.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Crema%20con%20CBD" },
          { nombre: "Tienda Verde Natural", precio: "$26.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Crema%20con%20CBD" }
        ],
        "Bálsamo con CBD": [
          { nombre: "Cannabis Medic", precio: "$15.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Balsamo%20con%20CBD" },
          { nombre: "Wellness Store", precio: "$14.500", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Balsamo%20con%20CBD" }
        ],
        "Parche de CBD": [
          { nombre: "Salud Orgánica", precio: "$35.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Parche%20de%20CBD" },
          { nombre: "Green Pharma", precio: "$34.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Parche%20de%20CBD" }
        ],
        "Spray oral con CBD": [
          { nombre: "Farmacia Natural", precio: "$30.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Spray%20oral%20con%20CBD" },
          { nombre: "Tienda Verde Natural", precio: "$29.500", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Spray%20oral%20con%20CBD" }
        ],
        "Supositorios con CBD": [
          { nombre: "Cannabis Medic", precio: "$40.000", link: "https://wa.me/573001112233?text=Hola,%20quiero%20comprar%20Supositorios%20con%20CBD" },
          { nombre: "Wellness Store", precio: "$39.000", link: "https://wa.me/573009998877?text=Hola,%20quiero%20comprar%20Supositorios%20con%20CBD" }
        ]
      };
      
  
      botones.forEach((btn) => {
        btn.addEventListener("click", () => {
          const producto = btn.getAttribute("data-producto");
          modalTitle.textContent = `Tiendas disponibles para ${producto}`;
          modalBody.innerHTML = "";
    
          if (dataTiendas[producto]) {
            dataTiendas[producto].forEach(tienda => {
              modalBody.innerHTML += `
                <div class="tienda">
                  <p><strong>${tienda.nombre}</strong></p>
                  <p>Precio: ${tienda.precio}</p>
                  <a href="${tienda.link}" target="_blank" class="contactar">Contactar</a>
                </div>
              `;
            });
          } else {
            modalBody.innerHTML = `<p>No hay tiendas registradas para este producto.</p>`;
          }
    
          // Mostrar modal centrado
          modal.classList.add("show");
        });
      });
    
      // 🔥 Cerrar modal con la X
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
      });
    
      // 🔥 Cerrar modal haciendo click fuera
      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("show");
        }
      });
  });
  