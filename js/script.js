
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

$(document).ready(function() {
    flatpickr("#reservation-date", {
        dateFormat: "Y-m-d",
        minDate: "today"
    });
    flatpickr("#reservation-time", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
    });
});

// CARRUSEL 'NOSOTROS'
const swiper = new Swiper('.swiper-container', {
slidesPerView: 5, 
loop: true, 
loopFillGroupWithBlank: true,
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
breakpoints: {
    640: {
        slidesPerView: 3, // Cambiado a 3 para dispositivos pequeños
    },
    768: {
        slidesPerView: 3, // Opcionalmente puedes mantener 3 para tablets
    },
    1024: {
        slidesPerView: 5,
    },
},
});
// Marcar como "activo" el enlace correspondiente según la página actual
const currentUrl = window.location.href; // Obtiene la URL actual
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
  }
});


