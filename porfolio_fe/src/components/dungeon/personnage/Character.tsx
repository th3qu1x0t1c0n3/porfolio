import React, {useEffect, useState} from 'react';
import Statistics from "./Statistics";
import Dice from "../side/Dice";
import Informations from "./Informations";
import Weapons from "./Weapons";
import Inventory from "./Inventory";
import Spells from "./Spells";
import Traits from "./Traits";
import Logs from "./Logs";
import {ICharactere} from "../../../assets/models/dungeon/character";
import {IInventory} from "../../../assets/models/dungeon/equipments";
import {personnageService} from "../../../App";

function Character({character}: {character: ICharactere}) {
    const [inventory, setInventory] = useState<IInventory[]>([]);

    useEffect(() => {
        getInventory();
    }, [character]);

    async function getInventory() {
        await personnageService.getEquipments(character.id)
            .then((invent) => {
                if (invent === undefined) return;
                setInventory([]);
                invent.map((item) => {
                    personnageService.getEquipmentByReference(item.reference).then((equip) => {
                        if (equip === undefined) return;
                        if (inventory.includes({qty: item.qty, equipment: equip, isEquipped: item.equipped})) return;
                        setInventory(inventory => [...inventory, {
                            qty: item.qty,
                            equipment: equip,
                            isEquipped: item.equipped
                        }])
                    })
                })
            })
    }

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
                    <Weapons inventory={inventory}/>
                </div>
                <div className="col-lg-6 col-12">
                    <Inventory inventory={inventory} getInventory={getInventory}/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <Spells character={character} />
                </div>
                <div className="col-lg-6 col-12">
                    <Traits character={character} />
                </div>
            </div>
            <Logs/>
        </div>
    );
}

export default Character;
