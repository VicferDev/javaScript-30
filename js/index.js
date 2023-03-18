// // Agrega un event listener a cada tecla de la batería
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);

// // Función para reproducir el sonido cuando se pulsa una tecla
// function playSound(event) {
//     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
//     if (!audio) return; // Detiene la función si se pulsa una tecla que no tiene sonido
//     audio.currentTime = 0; // Rebobina el sonido a su inicio para permitir múltiples pulsaciones
//     audio.play();
//     key.classList.add('playing'); // Agrega la clase "playing" para aplicar estilos adicionales
// }

// // Función para eliminar la clase "playing" después de que se completa la transición CSS
// function removeTransition(event) {
//     if (event.propertyName !== 'transform') return; // Detiene la función si no es una transición de transformación
//     event.target.classList.remove('playing');
//}//





window.addEventListener("keydown",
    function (e) {
        console.log(e.key)
        const audio = document.querySelector(`audio[data-key="${e.key}"]`)
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    });