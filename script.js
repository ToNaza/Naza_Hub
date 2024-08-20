document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
    const snowflakes = 100;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.width = Math.random() * 10 + 2 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDelay = Math.random() * 10 + 's';

        snowContainer.appendChild(snowflake);
        
        // Optionally remove the snowflake after its animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake(); // Create a new snowflake when the old one finishes falling
        });
    }

    for (let i = 0; i < snowflakes; i++) {
        createSnowflake();
    }
});

