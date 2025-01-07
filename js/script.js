  // Marcar como "activo" el enlace correspondiente según la página actual
  const currentUrl = window.location.href; // Obtiene la URL actual
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
      if (currentUrl.includes(link.getAttribute("href"))) {
          link.classList.add("active");
      }
  });
$(document).ready(function () {
    console.log("Script cargado correctamente");

    const foodSuggestions = ["Ramen", "Sushi", "Okonomiyaki", "Takoyaki", "Sashimi", "Tempura"];

    $('#generate-card').on('click', function () {
        const userName = $.trim($('#user-name').val());
        const birthdate = $.trim($('#user-birthdate').val());

        if (!userName || !birthdate) {
            alert('Por favor, completa ambos campos.');
            return;
        }

        const japaneseName = convertToHiragana(userName);

        const foodIndex = new Date(birthdate).getDate() % foodSuggestions.length;
        const foodSuggestion = foodSuggestions[foodIndex];

        const cardHtml = `
            <p><strong>Nombre en japonés (Hiragana):</strong> ${japaneseName}</p>
            <p><strong>Recomendación del chef:</strong> ${foodSuggestion}</p>
        `;

        $('#card-content').html(cardHtml);

        // Crear modal dinámicamente si no existe
        if ($('#card-result').length === 0) {
            const modalHtml = `
                <div class="modal fade" id="card-result" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="cardModalLabel">Tu tarjeta personalizada</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>
                            <div class="modal-body" id="card-content">
                                <!-- Contenido generado dinámicamente -->
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('body').append(modalHtml);
        }

        // Mostrar el modal
        $('#card-result').modal('show');
    });

    function convertToHiragana(name) {
        const hiraganaMap = {
            'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
            'k': 'か', 's': 'さ', 't': 'た', 'n': 'な', 'h': 'は',
            'm': 'ま', 'y': 'や', 'r': 'ら', 'w': 'わ', 'g': 'が',
            'z': 'ざ', 'd': 'だ', 'b': 'ば', 'p': 'ぱ', 'f': 'ふ',
            'ch': 'ち', 'ts': 'つ', 'sh': 'し', 'j': 'じ'
        };

        const vowels = ['a', 'i', 'u', 'e', 'o'];
        let hiraganaName = '';
        let i = 0;

        while (i < name.length) {
            const char = name[i].toLowerCase();
            const nextChar = name[i + 1] ? name[i + 1].toLowerCase() : '';

            const compound = char + nextChar;
            if (hiraganaMap[compound]) {
                hiraganaName += hiraganaMap[compound];
                i += 2;
            } else if (hiraganaMap[char]) {
                hiraganaName += hiraganaMap[char];
                i++;
            } else if (vowels.includes(char)) {
                hiraganaName += char;
                i++;
            } else {
                hiraganaName += char;
                i++;
            }
        }

        return hiraganaName;
    }
});

/* CARRUSEL*/

const carrusel = document.querySelector(".carrusel");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

let desplazamiento = 0;
const anchoImagen = 300; // Ancho de cada imagen
const margen = 10; // Margen entre las imágenes
const totalImagenes = document.querySelectorAll(".carrusel-item").length; // Total de imágenes
const carruselAncho = (totalImagenes * anchoImagen) + ((totalImagenes - 1) * margen); // Ancho total del carrusel

// Mover a la derecha (mover hacia la izquierda)
flechaIzquierda.addEventListener("click", () => {
    if (desplazamiento < 0) {
        desplazamiento += anchoImagen + margen; // Desplazar a la derecha
        carrusel.style.transform = `translateX(${desplazamiento}px)`;
    }
});

// Mover a la izquierda (mover hacia la derecha)
flechaDerecha.addEventListener("click", () => {
    const contenedorCarrusel = document.querySelector(".carrusel-contenedor");
    if (desplazamiento > -(carruselAncho - contenedorCarrusel.offsetWidth)) {
        desplazamiento -= anchoImagen + margen; // Desplazar a la izquierda
        carrusel.style.transform = `translateX(${desplazamiento}px)`;
    }
});