import {Table, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {IInventory} from "../../../assets/models/dungeon/equipments";

interface IWeapons {
    inventory: IInventory[],
}

function Weapons({inventory}: IWeapons) {
    const {t} = useTranslation();
    const [weapons, setWeapons] = useState<IInventory[]>([])

    useEffect(() => {
        setWeapons(inventory.filter((item) => item.isEquipped && !weapons.includes(item)))
    }, [inventory]);

    function getNbCheckbox(item: IInventory) {
        if (item.equipment.equipment_category.name === 'Weapon' && item.qty > 1)
            return item.qty.toString().split('');
        return [];
    }

    return (
        <>
            <h3 className="text-white text-center mt-4">{t('pages.dungeon.weapons')}</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>{t('pages.dungeon.quantity')}</th>
                    <th>{t('pages.dungeon.name')}</th>
                    <th>{t('pages.dungeon.damage')}</th>
                    <th>{t('pages.dungeon.category')}</th>
                    <th>{t('pages.dungeon.throw')}</th>
                </tr>
                </thead>
                <tbody>
                {
                    weapons.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.qty}</td>
                                <td>{item.equipment.name}</td>
                                <td>
                                    {item.equipment.damage?.damage_dice}
                                    {
                                        item.equipment.two_handed_damage &&
                                        <span> / {item.equipment.two_handed_damage?.damage_dice}</span>
                                    }
                                </td>
                                <td>{item.equipment.equipment_category.name}</td>
                                <td>
                                    <Form>
                                        {
                                            getNbCheckbox(item).map((number, index) => {
                                                return (
                                                    <Form.Group key={index} className="mb-3" controlId="checker">
                                                        <Form.Check type="checkbox" label={number}/>
                                                    </Form.Group>
                                                )
                                            })
                                        }
                                    </Form>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    )
}

export default Weapons;