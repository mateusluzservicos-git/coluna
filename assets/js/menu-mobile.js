document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('menu-open');
    });
    // Fecha o menu ao clicar fora (apenas em mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 900 && !menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('menu-open');
        }
    });
    // Fecha o menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            menu.classList.remove('menu-open');
        }
    });
});
