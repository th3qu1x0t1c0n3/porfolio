
export interface Enemy {
    id: number;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    size: number;
    isMoving: boolean;
}

export interface Actor {
    x: string;
    y: string;
    size: number;
}

export interface GameState {
    partieEnCours: boolean;
    actor: Actor;
    enemies: Enemy[];
    score: number;
    time: string;
}