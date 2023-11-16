import React, {useEffect, useState} from 'react';
import {ICharactere} from "../../../assets/models/dungeon/character";

function HealthBar({ character }: { character: ICharactere}) {
    function decrementHealth() {
        character.currentHealth--;
    }

    function incrementHealth() {
        character.currentHealth++;
    }

    function getHealthColor() {
        if (character.currentHealth === 0) {
            return 'bg-danger';
        } else if (character.currentHealth <= character.health / 4) {
            return 'bg-warning';
        } else if (character.currentHealth <= character.health / 2) {
            return 'bg-info';
        } else {
            return 'bg-success';
        }
    }

    return (
        <div className="col-xl-8 col-lg-7 col-md-7">
            <div className="d-flex align-items-center">
                <button
                    className="btn btn-danger mx-2 fw-bold"
                    onClick={decrementHealth}
                    disabled={character.currentHealth === 0}
                >-</button>
                <div className="col text-center">
                    <div className="progress" style={{ height: '25px' }}>
                        <div
                            onClick={decrementHealth}
                            className={`progress-bar fw-bold ${getHealthColor()}`}
                            role="progressbar"
                            style={{ width: `${( 100 * character.currentHealth / character.health)}%` }}
                        >{character.currentHealth}</div>
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