import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {IInventory} from "../../../assets/models/dungeon/equipments";
import {personnageService} from "../../../App";
import {toast} from "react-toastify";
import {ICharactere} from "../../../assets/models/dungeon/character";

function Inventory({character}: {character: ICharactere}) {
    const {t} = useTranslation();
    const [inventory, setInventory] = useState<IInventory[]>([]);
    const [totalPages, setTotalPages] = useState<number[]>([1, 2, 3]);
    const [pages, setPages] = useState<number[]>([1, 2, 3]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const maxPerPage = 10;

    useEffect(() => {
        getInventory()
            .then(r => setTotalPages(Array.from(Array(Math.ceil(inventory.length / maxPerPage)), (_, i) => i + 1)));
    }, []);

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

    function setPage(page: number) {
        if (totalPages.length === 0) {
            getInventory().then(r => setTotalPages(Array.from(Array(Math.ceil(inventory.length / maxPerPage)), (_, i) => i + 1)));
        }
        if (page < 1 || page > totalPages.length) return;

        setCurrentPage(page);

        if (totalPages.length <= 3) setPages(Array<number>(Math.min(3, 3)).fill(page).map((_, i) => _ + i));
        else if (page <= 2) setPages(Array<number>(Math.min(3, totalPages.length)).fill(1).map((_, i) => _ + i));
        else if (page >= totalPages.length - 1) setPages(Array<number>(Math.min(3, totalPages.length)).fill(totalPages.length - 2).map((_, i) => _ + i));
        else setPages(Array<number>(Math.min(3, totalPages.length)).fill(page).map((_, i) => _ + i));
    }

    function getInventoryByPage() {
        return inventory.slice((currentPage - 1) * maxPerPage, currentPage * maxPerPage);
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
                        <button className={`page-link py-2 px-3 ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={() => setPage(currentPage - 1)}>
                            <span>{t('pages.dungeon.previous')}</span>
                        </button>
                    </li>
                    {
                        pages.map((item, index) => {
                            return (
                                <li key={index} className="page-item">
                                    <button className={`page-link py-2 px-3 ${currentPage === item ? 'active' : ''}`}
                                            onClick={() => setPage(item)}>
                                        <span>{item}</span>
                                    </button>
                                </li>
                            )
                        })
                    }
                    <li className="page-item">
                        <button className={`page-link py-2 px-3 ${currentPage === totalPages.length ? 'disabled' : ''}`}
                                onClick={() => setPage(currentPage + 1)}>
                            <span>{t('pages.dungeon.next')}</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Inventory;