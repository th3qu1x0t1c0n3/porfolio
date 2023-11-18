import {IEquipDnd, IEquipments} from "../models/dungeon/equipments";
import {ISpells} from "../models/dungeon/spells";
import {ITrait} from "../models/dungeon/character";
import axios from "axios";
import {dndInstance} from "../../App";

interface IDataDndEquip{
    count: number;
    results: IEquipDnd[]
}

export class DndService{

    getEquipment(reference: string): Promise<IEquipments>{
        return dndInstance.get<IEquipments>(reference).then((response) => {
            return response.data;
        })
    }

    getAllEquipments(): Promise<IDataDndEquip>{
        return dndInstance.get<IDataDndEquip>("/equipment").then((response) => {
            return response.data;
        })
    }

    getEquipmentByUrl(url: string): Promise<IEquipments>{
        return axios.get<IEquipments>("https://www.dnd5eapi.co" + url).then((response) => {
            return response.data;
        })
    }

    getSpell(index: string): Promise<ISpells>{
        return dndInstance.get<ISpells>(index).then((response) => {
            return response.data;
        })
    }

    getTrait(index: string): Promise<ITrait>{
        return dndInstance.get<ITrait>(index).then((response) => {
            return response.data;
        })
    }


}