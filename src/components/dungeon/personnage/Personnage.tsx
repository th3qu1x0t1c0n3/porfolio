import React from 'react';
import Statistics from "./Statistics";
import Dice from "../side/Dice";
import Informations from "./Informations";
import Armes from "./Armes";
import Inventory from "./Inventory";
import Spells from "./Spells";
import Traits from "./Traits";
import Logs from "./Logs";

function Personnage() {
    return (
        <div className="bg-secondary container-fluid">
            {/* Espacement pour les fixed items*/}
            <div className="row mt-md-3"></div>
            <div className="row mt-md-5"></div>
            <div className="row mt-md-5"></div>

            <Statistics/>

            <div className="row d-md-none">
                <div className="col-lg-6 col-12">
                    <Dice/>
                </div>
            </div>
            {/* Dés End  */}

            <div className="row">
                <div className="col-lg-6 col-12">
                    <Informations/>
                    <Armes/>
                </div>
                <div className="col-lg-6 col-12">
                    <Inventory/>
                </div>
            </div>

            <div className="row">
                {/* sorts */}
                <div className="col-lg-6 col-12">
                    <Spells/>
                </div>
                {/* traits de personnage */}
                <div className="col-lg-6 col-12">
                    <Traits/>
                </div>
            </div>
            {/* journal */}
            <Logs/>
        </div>
    );
}

export default Personnage;
