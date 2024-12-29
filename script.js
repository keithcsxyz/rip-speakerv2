//kandilaaaaa
document.querySelector('.kandol-btn').addEventListener('click', function() {
    const flowerContainer = document.getElementById('kandolContainer');

    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('kandila');
        flower.textContent = '🕯️'; // You can change this to any emoji or image
        
        // Randomize the position and size of the flower
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flower.style.fontSize = `${Math.random() * 2 + 1}rem`;
        
        flowerContainer.appendChild(flower);

        // Remove the flower after the animation
        setTimeout(() => {
            flower.remove();
        }, 3000);
    }
});




//burak
document.querySelector('.burak-btn').addEventListener('click', function() {
    const flowerContainer = document.getElementById('burakContainer');

    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('burak');
        flower.textContent = '🥀'; // You can change this to any emoji or image
        
        // Randomize the position and size of the flower
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flower.style.fontSize = `${Math.random() * 2 + 1}rem`;
        
        flowerContainer.appendChild(flower);

        // Remove the flower after the animation
        setTimeout(() => {
            flower.remove();
        }, 3000);
    }
});
