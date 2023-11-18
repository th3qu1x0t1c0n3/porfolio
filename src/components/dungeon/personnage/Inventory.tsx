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
    const [pages, setPages] = useState<number[]>([1]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const maxPerPage = 10;

    useEffect(() => {
        getInventory()
            .then(r => setPages(Array.from(Array(Math.ceil(inventory.length / maxPerPage)), (_, i) => i + 1)));
    }, []);

    async function getInventory() {
        await personnageService.getEquipments('demochar')
            .then((invent) => {
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

    function setPage(page: number) {
        setCurrentPage(page);
    }

    function getInventoryByPage() {
        return inventory.slice((currentPage - 1) * maxPerPage, currentPage * maxPerPage);
    }

    function getPages() {
        if (currentPage <= 2) return Array<number>(Math.min(3, pages.length)).fill(1).map((_, i) => _ + i);
        if (currentPage >= pages.length - 1) return Array<number>(Math.min(3, pages.length)).fill(pages.length - 2).map((_, i) => _ + i);
        return Array<number>(Math.min(3, pages.length)).fill(currentPage).map((_, i) => _ + i);
    }

    function nextPage() {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    function previousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
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
                    getInventoryByPage().map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.qty}</td>
                                <td>{item.equipment.name}</td>
                                <td>{item.equipment.weight}</td>
                                <td>{item.equipment.cost?.quantity} {item.equipment.cost?.unit}</td>
                                <td>
                                    <select className="form-select badge w-75 py-2 bg-warning text-dark"
                                            defaultValue={"action"}>
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
                        <button className="page-link py-2 px-3" onClick={previousPage}>
                            <span>{t('pages.dungeon.previous')}</span>
                        </button>
                    </li>
                    {
                        getPages().map((item, index) => {
                            return (
                                <li key={index} className="page-item">
                                    <button className={`page-link py-2 px-3 ${currentPage === item ? 'active' : ''}`} onClick={() => setPage(item)}>
                                        <span>{item}</span>
                                    </button>
                                </li>
                            )
                        })
                    }

                    <li className="page-item">
                        <button className="page-link py-2 px-3" onClick={nextPage}>
                            <span>{t('pages.dungeon.next')}</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Inventory;