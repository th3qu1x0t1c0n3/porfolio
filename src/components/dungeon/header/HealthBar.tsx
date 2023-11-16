import React, { useState } from 'react';
import {ICharactere} from "../../../assets/models/dungeon/character";

function HealthBar({ character }: { character: ICharactere}) {
    const [disable, setDisable] = useState(true);

    return (
        <div className="col-xl-8 col-lg-7 col-md-7">
            <div className="d-flex align-items-center">
                <button
                    className="btn btn-danger mx-2 fw-bold"
                    // onClick={decrementHealth}
                    disabled={character.currentHealth === 0}
                >-</button>
                <div className="col text-center">
                    <div className="progress" style={{ height: '25px' }}>
                        <div
                            // onClick={decrementHealth} ${getCouleur()}
                            className={`progress-bar fw-bold `}
                            role="progressbar"
                            style={{ width: `${(100 * character.currentHealth / character.health)}%` }}
                            // aria-valuenow="25"
                            // aria-valuemin="0" aria-valuemax="100"
                        >EDIT: CHAR_HEALTH</div>
                    </div>
                </div>
                <button
                    className="btn btn-success mx-2 fw-bold"
                    // onClick={incrementHealth}
                    disabled={character.currentHealth === character.health}
                >+</button>
            </div>
        </div>
    );
}

export default HealthBar;