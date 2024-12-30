$(document).ready(function () {
    console.log("Script cargado correctamente");

    const foodSuggestions = ["Ramen", "Sushi", "Okonomiyaki", "Takoyaki", "Sashimi", "Tempura"];

    $('#generate-card').on('click', function () {
        const userName = $('#user-name').val();
        const birthdate = $('#user-birthdate').val();
        
        if (!userName || !birthdate) {
            alert('Por favor, completa ambos campos.');
            return;
        }

        // Convertir nombre a Hiragana (simple transliteración)
        const japaneseName = convertToHiragana(userName);
        
        // Selección de platillo
        const foodIndex = new Date(birthdate).getDate() % foodSuggestions.length;
        const foodSuggestion = foodSuggestions[foodIndex];

        // Contenido de la tarjeta
        const cardHtml = `
            <p><strong>Nombre en japonés (Hiragana):</strong> ${japaneseName}</p>
            <p><strong>Recomendación del chef:</strong> ${foodSuggestion}</p>
            <img src="https://source.unsplash.com/200x200/?${foodSuggestion}" alt="${foodSuggestion}" style="border-radius: 8px; margin-top: 10px;">
        `;
        $('#card-content').html(cardHtml);

        // Mostrar el modal
        $('#card-result').modal('show');
    });

    // Función para convertir el nombre a Hiragana
    function convertToHiragana(name) {
        const hiraganaMap = {
            'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
            'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
            'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
            'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
            'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
            'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
            'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
            'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
            'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
            'wa': 'わ', 'wo': 'を', 'n': 'ん'
        };

        let hiraganaName = '';
        name.split('').forEach(char => {
            let lowerChar = char.toLowerCase();
            if (hiraganaMap[lowerChar]) {
                hiraganaName += hiraganaMap[lowerChar];
            } else {
                hiraganaName += char; // Para cualquier carácter no mapeado
            }
        });

        return hiraganaName;
    }
});
