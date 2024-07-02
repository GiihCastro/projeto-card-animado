document.addEventListener('DOMContentLoaded', function() {
    var zoomImage = document.getElementById('zoomImage');
    var eyeIcon = document.getElementById('eye');
    var eyeOffIcon = document.getElementById('eyeOff');
    var cardContent = document.getElementById('cardContent');
    
    eyeOffIcon.style.display = 'none';

    zoomImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
    });

    zoomImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    eyeIcon.addEventListener('click', function() {
        zoomImage.style.display = 'none';
        cardContent.style.display = 'block';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'block';
    });

    eyeOffIcon.addEventListener('click', function() {
        zoomImage.style.display = 'block';
        cardContent.style.display = 'block';
        eyeIcon.style.display = 'block';
        eyeOffIcon.style.display = 'none';
    });
});