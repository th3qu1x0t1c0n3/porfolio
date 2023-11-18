import {ICharactere, ITraitRef} from "../models/dungeon/character";
import {IEquipementPost, IEquipementReference, IEquipments, IInventory} from "../models/dungeon/equipments";
import {ISpellReference} from "../models/dungeon/spells";
import {IMessage, IMessageGet} from "../models/message";
import {cegepInstance, dndInstance} from "../../App";

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

    async createSession(username: string, password: string): Promise<string> {
        return cegepInstance.post<IToken>('token', {
            username: username,
            password: password
        }).then((response) => {
            const token = response.data.data;
            localStorage.setItem("token", token);
            cegepInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return token;
        })
    }

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
        return await cegepInstance.get<IDataLePerso>(`character/${id}`)
            .then((response) => {
                return response.data.data;
            })
    }

    async getCharacters(): Promise<ICharactere[]> {
        return await cegepInstance.get<IDataperso>('character')
            .then((response) => {
                return response.data.data;
            })
    }

    async getInventory(id: string): Promise<IInventory[]> {
        let inventory: IInventory[] = []

        await this.getEquipments(id)
            .then((invent) => {
                invent.map((item) => {
                    this.getEquipmentByReference(item.reference).then((equip) => {
                        let nouvEquip: IInventory = {qty: item.qty, equipment: equip, isEquipped: item.equipped};
                        inventory.push(nouvEquip)
                    })
                })
        })

        return inventory;
    }

    async getEquipments(id: string): Promise<IEquipementReference[]> {
        return await cegepInstance.get<IDataEquipement>(`equipments/${id}`)
            .then((response) => {
                return response.data.data;
            })
    }

    async getEquipmentByReference(reference: string): Promise<IEquipments> {
        return await dndInstance.get<IEquipments>(`${reference}`)
            .then((response) => {
                return response.data;
            })
    }

    async getEquipment(id: string): Promise<IEquipementReference> {
        return await cegepInstance.get<IEquipementReference>(`equipment/${id}`)
            .then((response) => {
                return response.data;
            })
    }

    async postEquipment(id: string, equipements: IEquipementPost) {
        return await cegepInstance.post<any>(`equipments/${id}`, equipements)
            .then((response) => {
                return response.data;
            })
    }

    async deleteEquipement(characterId: string, equipmentId: string) {
        return await cegepInstance.delete<any>(`equipments/${characterId}/${equipmentId}`)
            .then((response) => {
                return response.data;
            })
    }

    async getSpells(): Promise<ISpellReference[]> {
        return await cegepInstance.get<IDataSpell>('spell')
            .then((response) => {
                return response.data.data;
            })
    }

    async getSpell(id: string): Promise<ISpellReference> {
        return await cegepInstance.get<ISpellReference>(`spell/${id}`)
            .then((response) => {
                return response.data;
            })
    }

    async getTraits(): Promise<ITraitRef[]> {
        return await cegepInstance.get<IDataTrait>('trait')
            .then((response) => {
                return response.data.data;
            })
    }

    async putHp(life:{currentHealth:number}, characterId:string){
        return await cegepInstance.put<any>(`health/${characterId}`, life)
            .then((response) => {
                return response.data;
            })
    }



    async getMessages(): Promise<IMessageGet> {
        return await cegepInstance.get<IMessageGet>('message')
            .then((response) => {
                return response.data;
            })
    }

    async postMessage(message: IMessage): Promise<IMessageGet> {
        return await cegepInstance.put<any>(`contact/${message.userid}`)
            .then((response) => {
                return response.data;
            })
    }
}