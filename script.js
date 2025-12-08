document.addEventListener('DOMContentLoaded', () => {
    const logoSvg = document.querySelector('.logo svg');
    if (logoSvg) {
        logoSvg.addEventListener('click', () => {
            logoSvg.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            logoSvg.style.transform = 'rotate(360deg)';
            
            // On remet le logo à 0 sans transition après l'animation pour pouvoir recommencer
            setTimeout(() => {
                logoSvg.style.transition = 'none';
                logoSvg.style.transform = 'rotate(0deg)';
            }, 800);
        });
    }

    const poster = document.querySelector('.wanted-poster');
    if (poster) {
        poster.addEventListener('mousemove', (e) => {
            const rect = poster.getBoundingClientRect();
            const x = e.clientX - rect.left; // position X de la souris dans le poster
            const y = e.clientY - rect.top;  // position Y de la souris dans le poster
            
            // On calcule une rotation très légère (max 5 degrés)
            const rotateX = ((y / rect.height) - 0.5) * -10;
            const rotateY = ((x / rect.width) - 0.5) * 10;
            
            poster.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // On remet le poster droit quand la souris sort
        poster.addEventListener('mouseleave', () => {
            poster.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }
});