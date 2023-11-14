import React, { useState } from 'react';

function HealthBar() {
    const [disable, setDisable] = useState(true);

    return (
        <div className="d-flex align-items-center">
            <button
                className="btn btn-danger mx-2 fw-bold"
                // onClick={decrementHealth}
                disabled={disable}
            >-</button>
            <div className="col text-center">
                <div className="progress" style={{ height: '25px' }}>
                    <div
                        // onClick={decrementHealth} ${getCouleur()}
                        className={`progress-bar fw-bold `}
                        role="progressbar"
                        // style={{ width: `${(100 * myCharacter.currentHealth / myCharacter.health)}%` }}
                        // aria-valuenow="25"
                        // aria-valuemin="0" aria-valuemax="100"
                    >EDIT: CHAR_HEALTH</div>
                </div>
            </div>
            <button
                className="btn btn-success mx-2 fw-bold"
                // onClick={incrementHealth}
                disabled={disable}
            >+</button>
        </div>
    );
}

export default HealthBar;