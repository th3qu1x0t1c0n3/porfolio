import {useEffect, useState} from "react";
import {Enemy, GameState} from "../../../../assets/models/SauveQuiPeut";

function PlanJeu() {
    const [partieEnCours, setPartieEnCours] = useState(false);
    const [gameState, setGameState] = useState<GameState>({
        partieEnCours: false,
        actor: {x: "46%", y: "37%", size: 5}, // Centered in the safe zone
        enemies: [] as Enemy[],
        score: 0,
        time: "0",
    });
    let moveInterval: NodeJS.Timer | null | undefined = null;

    useEffect(() => {
        const initialEnemies = genererEnnemis(15);
        setGameState(prevState => ({
            ...prevState,
            enemies: initialEnemies,
        }));
    }, []);

    useEffect(() => {
        if (partieEnCours) {
            // Start moving enemies if partieEnCours is true
            moveInterval = setInterval(moveEnemies, 100);
        } else {
            // Stop moving enemies if partieEnCours becomes false
            if (moveInterval) clearInterval(moveInterval);
        }

        // Cleanup function to clear the interval when the component unmounts or partieEnCours changes
        return () => {
            if (moveInterval && !partieEnCours) clearInterval(moveInterval);
        };
    }, [partieEnCours]);

    const moveEnemies = () => {
        const updatedEnemies = gameState.enemies.map(enemy => {
            let newX = enemy.x + enemy.deltaX;
            let newY = enemy.y + enemy.deltaY;

            // Assuming the game area is 100x100 units
            const gameAreaSize = 100;
            const enemySize = enemy.size;

            // Check bounds for X and reverse direction if necessary
            if (newX < 0 || newX + enemySize > gameAreaSize) {
                enemy.deltaX *= -1;
                newX = enemy.x + enemy.deltaX; // Recalculate newX after direction change
            }

            // Check bounds for Y and reverse direction if necessary
            if (newY < 0 || newY + enemySize > gameAreaSize) {
                enemy.deltaY *= -1;
                newY = enemy.y + enemy.deltaY; // Recalculate newY after direction change
            }

            return {...enemy, x: newX, y: newY};
        });

        setGameState(prevState => ({
            ...prevState,
            enemies: updatedEnemies,
        }));
    }

    const initJeu = () => {
        // Initialize game state, add listeners, etc.
        btnRecommencerClic();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        // Implement keydown logic here
    };

    const genererEnnemis = (nb: number): Enemy[] => {
        const enemies: Enemy[] = [];
        // Define the safe zone boundaries
        const safeZoneStart = 37.5;
        const safeZoneEnd = 62.5;

        for (let i = 0; i < nb; i++) {
            let taille = Math.random() * (6 - 3) + 3; // Size between 3% and 6%
            let x = Math.random() * (100 - taille); // Adjusted for size
            let y = Math.random() * (100 - taille); // Adjusted for size

            // Check if the enemy is within the safe zone and adjust if necessary
            while ((x + taille > safeZoneStart && x < safeZoneEnd) || (y + taille > safeZoneStart && y < safeZoneEnd)) {
                x = Math.random() * (100 - taille);
                y = Math.random() * (100 - taille);
            }

            const deltaX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4); // Random deltaX between -4 and 4
            const deltaY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4); // Random deltaY between -4 and 4
            enemies.push({id: i, x, y, deltaX, deltaY, size: taille, isMoving: false});
        }
        return enemies;
    };

    const btnRecommencerClic = () => {
        // Logic to handle "Recommencer" button click
        setPartieEnCours(false);

        clearInterval(moveInterval as NodeJS.Timer)
        setGameState({
            partieEnCours: false,
            actor: {x: "46%", y: "37%", size: 5},
            enemies: genererEnnemis(15),
            score: 0,
            time: "0",
        });
    };

    const btnGoClic = () => {
        // Logic to handle "Go" button click
        setPartieEnCours(true);

    };

    return (
        <div>
            <div id="planJeu" className={""}>
                {/* Render actor and enemies */}
                {gameState.enemies.map((enemy) => (
                    <div key={enemy.id} className="enemy" style={{
                        left: `${enemy.x}%`,
                        top: `${enemy.y}%`,
                        width: `${enemy.size / 2}%`,
                        height: `${enemy.size}%`
                    }}></div>
                ))}
                <div id={"safeZone"} className="border border-1 border-black">
                    <div id="acteur" style={{left: gameState.actor.x, top: gameState.actor.y}}></div>
                </div>

            </div>
            <div className={"text-center"}>
                <button className="btn btn-success m-2" onClick={btnGoClic}>Go</button>
                <button className="btn btn-primary m-2" onClick={btnRecommencerClic}>Recommencer</button>
            </div>
        </div>
    );
}

export default PlanJeu;