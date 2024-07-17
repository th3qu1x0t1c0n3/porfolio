import {ICharactere} from "../../../../assets/models/dungeon/character";

interface IHealthBar {
    character: ICharactere,

    decrementHealth(): void,

    incrementHealth(): void
}

function HealthBar({character, decrementHealth, incrementHealth}: IHealthBar) {

    function getHealthColor(): string {
        if (character.currentHealth <= character.health / 3) {
            return 'bg-danger';
        } else if (character.currentHealth <= character.health * 2 / 3) {
            return 'bg-warning';
        } else {
            return 'bg-success';
        }
    }

    return (
        <div className="d-flex align-items-center">
            <button
                className="btn btn-danger mx-2 fw-bold"
                onClick={decrementHealth}
                disabled={character.currentHealth === 0}
            >-
            </button>
            <div className="col text-center">
                <div className="progress" style={{height: '25px'}}>
                    <div
                        onClick={decrementHealth}
                        className={`progress-bar fw-bold ${getHealthColor()}`}
                        role="progressbar"
                        style={{width: `${(100 * character.currentHealth / character.health)}%`}}
                    >{character.currentHealth}</div>
                </div>
            </div>
            <button
                className="btn btn-success mx-2 fw-bold"
                onClick={incrementHealth}
                disabled={character.currentHealth === character.health}
            >+
            </button>
        </div>
    );
}

export default HealthBar;