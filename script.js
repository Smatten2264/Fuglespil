document.addEventListener('DOMContentLoaded', () => {
    // Få alle fugle i spillet
    const birds = document.querySelectorAll('.bird');
    let birdPositions = [];

    // Startposition for fuglene - samlet til venstre, men med forskellig højde
    birds.forEach((bird, index) => {
        birdPositions.push({
            top: 40 + (index * 5),  // Lidt forskellig højde for hver fugl (fra 40 til 70%)
            left: 10,  // Alle fugle starter til venstre
        });
        updateBirdPosition(bird, birdPositions[index]);
    });

    // Opdater fuglens position
    function updateBirdPosition(bird, position) {
        bird.style.top = position.top + '%';
        bird.style.left = position.left + '%';
    }

    // Lyt efter tastetryk (pil op, pil ned, space)
    document.addEventListener('keydown', (event) => {
        // Beregn minimum og maksimum y-værdier for alle fugle
        let minTop = Math.min(...birdPositions.map(bird => bird.top));
        let maxTop = Math.max(...birdPositions.map(bird => bird.top));

        birds.forEach((bird, index) => {
            if (event.key === "ArrowUp" || event.key === " ") {
                // Flyt fuglene op (tilpasser alle fugle)
                // Sørg for, at ingen fugl går over toppen
                if (minTop > 0) {
                    birdPositions[index].top = birdPositions[index].top - 5;
                }
            } else if (event.key === "ArrowDown") {
                // Flyt fuglene ned
                // Sørg for, at ingen fugl går under bunden
                if (maxTop < 90) {
                    birdPositions[index].top = birdPositions[index].top + 5;
                }
            }

            // Opdater fuglens position
            updateBirdPosition(bird, birdPositions[index]);
        });
    });
});
