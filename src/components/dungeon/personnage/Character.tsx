import React from 'react';
import Statistics from "./Statistics";
import Dice from "../side/Dice";
import Informations from "./Informations";
import Weapons from "./Weapons";
import Inventory from "./Inventory";
import Spells from "./Spells";
import Traits from "./Traits";
import Logs from "./Logs";
import {ICharactere} from "../../../assets/models/dungeon/character";

function Character({character}: {character: ICharactere}) {
    return (
        <div className="bg-secondary container-fluid">
            <Statistics character={character}/>

            <div className="row d-md-none">
                <div className="col-lg-6 col-12">
                    <Dice/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <Informations character={character}/>
                    <Weapons />
                </div>
                <div className="col-lg-6 col-12">
                    <Inventory />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <Spells />
                </div>
                <div className="col-lg-6 col-12">
                    <Traits />
                </div>
            </div>
            <Logs/>
        </div>
    );
}

export default Character;
