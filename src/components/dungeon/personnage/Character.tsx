import React from 'react';
import Statistics from "./Statistics";
import Dice from "../side/Dice";
import Informations from "./Informations";
import Weapons from "./Weapons";
import Inventory from "./Inventory";
import Spells from "./Spells";
import Traits from "./Traits";
import Logs from "./Logs";

function Character() {
    return (
        <div className="bg-secondary container-fluid">
            <div className="row mt-md-3"></div>
            <div className="row mt-md-5"></div>
            <div className="row mt-md-5"></div>

            <Statistics/>

            <div className="row d-md-none">
                <div className="col-lg-6 col-12">
                    <Dice/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <Informations/>
                    <Weapons/>
                </div>
                <div className="col-lg-6 col-12">
                    <Inventory/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <Spells/>
                </div>
                <div className="col-lg-6 col-12">
                    <Traits/>
                </div>
            </div>
            {/* journal */}
            <Logs/>
        </div>
    );
}

export default Character;
