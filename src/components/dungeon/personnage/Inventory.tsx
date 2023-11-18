import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {IInventory} from "../../../assets/models/dungeon/equipments";
import {personnageService} from "../../../App";

function Inventory() {
    const {t} = useTranslation();
    const [inventory, setInventory] = useState<IInventory[]>([{
        qty: 1,
        equipment: {
            index: "minimal",
            name: "Minimal Equipment",
            desc: ["A minimal equipment object."],
            weight: 4,
            cost: {
                quantity: 5,
                unit: "gp",
            },
            equipment_category: {
                index: "category",
                name: "Category",
                url: "/api/equipment-categories/category",
            },
            url: "/api/equipment/minimal",
        },
        isEquipped: false
    }]);

    useEffect(() => {
        getInventory();
    }, []);

    function getInventory(){
        personnageService.getInventory('0').then((response) => {
            setInventory(response);
            console.log(response)
        })
    }

    return (
        <>
            <h3 className="text-white text-center mb-3 mt-4">{t('inventory')}</h3>
            <table className="table table-dark table-hover text-center">
                <thead>
                    <tr className="text-muted">
                        <th>{t('pages.dungeon.qty')}</th>
                        <th>{t('pages.dungeon.name')}</th>
                        <th>{t('pages.dungeon.weight')}</th>
                        <th>{t('pages.dungeon.cost')}</th>
                        <th>{t('pages.dungeon.action')}</th>
                    </tr>
                </thead>
                <tbody>
                {
                    inventory.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.qty}</td>
                                <td>{item.equipment.name}</td>
                                <td>{item.equipment.weight}</td>
                                <td>{item.equipment.cost?.quantity} {item.equipment.cost?.unit}</td>
                                <td>
                                    <select className="form-select badge w-75 py-2 bg-warning text-dark" defaultValue={"action"}>
                                        <option value="action">{t('pages.dungeon.action')}</option>
                                        <option value="jeter">{t('pages.dungeon.garbage')}</option>
                                        <option value="equiper">{t('pages.dungeon.equip')}</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link py-2 px-3">
                            <span>{t('pages.dungeon.previous')}</span>
                        </a>
                    </li>
                    <li className="page-item {{(currentPage === i+displayMin)?'active':''}}">
                        <a className="page-link py-2 px-3">
                            ED: list 3P
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link py-2 px-3">
                            <span>{t('pages.dungeon.next')}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Inventory;