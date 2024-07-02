document.addEventListener('DOMContentLoaded', function() {
    var zoomImage = document.getElementById('zoomImage');
    var eyeIcon = document.getElementById('eye');
    var eyeOffIcon = document.getElementById('eyeOff');
    var cardImage = document.querySelector('.card-image');
    var cardContent = document.getElementById('cardContent');

    eyeIcon.addEventListener('click', function() {
        if (cardContent.classList.contains('show')) {
            cardContent.classList.remove('show');
            setTimeout(function() {
                cardImage.style.display = 'block';
                cardContent.classList.add('hide');
                eyeOffIcon.style.display = 'block';
            }, 300); // Tempo da animação em milissegundos
        } else {
            cardImage.style.display = 'none';
            cardContent.classList.remove('hide');
            eyeOffIcon.style.display = 'block';
            setTimeout(function() {
                cardContent.classList.add('show');
            }, 50); // Pequeno atraso para garantir que a animação funcione corretamente
        }
        toggleEyeIcon();
    });

    eyeOffIcon.addEventListener('click', function() {
        cardContent.classList.remove('show');
        setTimeout(function() {
            cardContent.classList.add('hide');
            cardImage.style.display = 'block';
            eyeOffIcon.style.display = 'none';
        }, 300); // Tempo da animação em milissegundos
        toggleEyeIcon();
    });

    function toggleEyeIcon() {
        if (eyeIcon.style.display === 'none') {
            eyeIcon.style.display = 'block';
        } else {
            eyeIcon.style.display = 'none';
        }
    }
});
