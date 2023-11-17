import {useTranslation} from "react-i18next";

function Inventory() {
    const {t} = useTranslation();

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
                <tr>
                    <td>ED: item.qty</td>
                    <td>ED: .name</td>
                    <td>ED: .weight</td>
                    <td>ED: cost?.quantity .unit</td>
                    <td>
                        <select className="form-select badge w-75 py-2 bg-warning text-dark" defaultValue={"action"}>
                            <option value="action">{t('pages.dungeon.action')}</option>
                            <option value="jeter">{t('pages.dungeon.garbage')}</option>
                            <option value="equiper">{t('pages.dungeon.equip')}</option>
                        </select>
                    </td>
                </tr>

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