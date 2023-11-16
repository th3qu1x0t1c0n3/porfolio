import {cegepInstance} from "../../react-app-env";
import {ICharactere, ITraitRef} from "../models/dungeon/character";
import {IEquipementReference} from "../models/dungeon/equipments";
import {ISpellReference} from "../models/dungeon/spells";

interface IToken {
    error: string,
    data: string // Token
}

interface IDataperso {
    error: string;
    data: ICharactere[];
}

interface IDataLePerso {
    error: string;
    data: ICharactere;
}

interface IDataEquipement {
    error: string;
    data: IEquipementReference[];
}

interface IDataSpell {
    error: string;
    data: ISpellReference[];
}

interface IDataTrait {
    error: string;
    data: ITraitRef[];

}

interface IValidation {
    [id: string]: string[];
}

export class PersonnageService {

    getToken(): string {
        const token = localStorage.getItem("token")
        if (token) {
            console.log("Restoring token from storage");
            cegepInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return token;
        }
        return "";
    }

    async getCharacter(id: string): Promise<ICharactere> {
        return await cegepInstance.get<IDataLePerso>(`/character/${id}`).then((response) => {
            return response.data.data;
        })
    }

    async getCharacters(): Promise<ICharactere[]> {
        return await cegepInstance.get<IDataperso>('/character').then((response) => {
            return response.data.data;
        })
    }

    async getEquipments(): Promise<IEquipementReference[]> {
        return await cegepInstance.get<IDataEquipement>('/equipment').then((response) => {
            return response.data.data;
        })
    }

    async getSpells(): Promise<ISpellReference[]> {
        return await cegepInstance.get<IDataSpell>('/spell').then((response) => {
            return response.data.data;
        })
    }

    async getTraits(): Promise<ITraitRef[]> {
        return await cegepInstance.get<IDataTrait>('/trait').then((response) => {
            return response.data.data;
        })
    }

    async getEquipement(id: string): Promise<IEquipementReference> {
        return await cegepInstance.get<IEquipementReference>(`/equipment/${id}`).then((response) => {
            return response.data;
        })
    }

    async getValidations(): Promise<IValidation> {
        return await cegepInstance.get<IValidation>('/validation').then((response) => {
            return response.data;
        })
    }

    async getValidation(id: string): Promise<IValidation> {
        return await cegepInstance.get<IValidation>(`/validation/${id}`).then((response) => {
            return response.data;
        })
    }

}