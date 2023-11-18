import {useTranslation} from "react-i18next";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useRef, useState} from "react";
import {IEquipDnd, IEquipments} from "../../assets/models/dungeon/equipments";
import {dndService} from "../../App";

function Store() {
    const {t} = useTranslation();
    const dragItem = useRef();
    const dragOverItem = useRef();

    const [equipments, setEquipments] = useState<IEquipDnd[]>(
        [{
            index: '',
            name: '',
            url: ''
        }]);
    const [equipmentsSelected, setEquipmentsSelected] = useState<IEquipments[]>(
        [{
            index: "chain-mail",
            name: "Chain Mail",
            desc: ["A set of interlocking metal rings, offering good protection."],
            equipment_category: {
                index: "armor",
                name: "Armor",
                url: "/api/equipment-categories/armor",
            },
            armor_category: "Heavy",
            armor_class: {
                base: 16,
                dex_bonus: false,
            },
            str_minimum: 13,
            stealth_disadvantage: true,
            weight: 55,
            cost: {
                quantity: 75,
                unit: "gp",
            },
            url: "/api/equipment/chain-mail",
        }]
    );
    const [selectedEquipment, setSelectedEquipment] = useState<IEquipments>(
        {
            index: "chain-mail",
            name: "Chain Mail",
            desc: ["A set of interlocking metal rings, offering good protection."],
            equipment_category: {
                index: "armor",
                name: "Armor",
                url: "/api/equipment-categories/armor",
            },
            armor_category: "Heavy",
            armor_class: {
                base: 16,
                dex_bonus: false,
            },
            str_minimum: 13,
            stealth_disadvantage: true,
            weight: 55,
            cost: {
                quantity: 75,
                unit: "gp",
            },
            url: "/api/equipment/chain-mail",
        }
    );

    useEffect(() => {
        dndService.getAllEquipments().then((response) => {
            setEquipments(response.results);
        });
    }, []);

    function getEquip(url: string) {
        dndService.getEquipmentByUrl(url).then((response) => {
            setSelectedEquipment(response);
        });
    }

    const dragStart = (e: any, position: any) => {
        dragItem.current = position;
    };

    const dragEnter = (e: any, position: any) => {
        dragOverItem.current = position;
    };

    const drop = (e: any) => {
        const copyListItems = [...equipments];
        const dragItemContent = copyListItems[dragItem.current!];
        copyListItems.splice(dragItem.current!, 1);
        copyListItems.splice(dragOverItem.current!, 0, dragItemContent);
        // dragItem.current = null;
        // dragOverItem.current = null;
        setEquipments(copyListItems);
    };

    return (
        <div className="container-fluid bg-warning p-5 min-vh-100">
            <h1 className="display-1">{t('pages.dungeon.store')}</h1>
            <div className="row">
                <div className="bg-light row pb-4">
                    <Accordion className="col-5">
                        <h1 className="display-5">{t('pages.dungeon.newEquipments')}</h1>
                        {
                            equipments?.filter((equip) => !equipmentsSelected.includes(selectedEquipment)).map((equip: IEquipDnd, index) => {
                                return (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Card>
                                            <Card.Header className={"m-0 p-0"}>
                                                <Accordion.Button as={Button} variant="link"
                                                                  onClick={() => getEquip(equip.url)}
                                                                  eventKey={index.toString()}
                                                                  onDragStart={(e) => dragStart(e, index)}
                                                                  onDragEnter={(e) => dragEnter(e, index)}
                                                                  onDragEnd={drop}
                                                                  draggable>
                                                    {equip.name}
                                                </Accordion.Button>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={index.toString()}>
                                                <Card.Body>
                                                    {selectedEquipment?.desc && selectedEquipment.desc.length > 0 ? selectedEquipment.desc : t('pages.dungeon.noDescription')}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                    <div className="col-5 bg-light border-dark bg-danger">
                        <div className="position-sticky sticky-top" style={{top: '15%'}}>
                            <h1 className="display-5">{t('pages.dungeon.addInventory')}</h1>
                            <ul className="">
                                {
                                    equipmentsSelected?.map((equip: IEquipments, index) => {
                                        return (
                                            <li className={"h4"} key={index}>{equip.name}</li>
                                        )
                                    })
                                }
                            </ul>
                            <Button className="" type="submit">{t('pages.dungeon.confirmAdd')}</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Store;