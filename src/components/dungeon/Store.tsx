import {useTranslation} from "react-i18next";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import {IEquipDnd, IEquipments} from "../../assets/models/dungeon/equipments";
import {dndService} from "../../App";

function Store() {
    const {t} = useTranslation();
    const [equipments, setEquipments] = useState<IEquipDnd[]>();
    const [selectedEquipment, setSelectedEquipment] = useState<IEquipments>();

    useEffect(() => {
        dndService.getAllEquipments().then((response) => {
            setEquipments(response.results);
        });
    }, []);

    function getEquip(url: string) {
        if (equipments) {
            dndService.getEquipmentByUrl(url).then((response) => {
                setSelectedEquipment(response);
            });
        }
    }

    return (
        <div className="container-fluid bg-warning p-5 vh-100">
            <h1 className="display-1">{t('pages.dungeon.store')}</h1>
            <div className="row">
                <div className="bg-light row pb-4">
                    <Accordion className="col-5">
                        <h1 className="display-5">{t('pages.dungeon.newEquipments')}</h1>
                        {
                            equipments?.map((equip: IEquipDnd, index) => {
                                return (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Card>
                                            <Card.Header className={"m-0 p-0"}>
                                                <Accordion.Button as={Button} variant="link"
                                                                  onClick={() => getEquip(equip.url)}
                                                                  eventKey={index.toString()}>
                                                    {equip.name}
                                                </Accordion.Button>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={index.toString()}>
                                                <Card.Body>
                                                    {selectedEquipment?.desc && selectedEquipment?.desc?.length > 0 ? selectedEquipment?.desc : t('pages.dungeon.noDescription')}
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
                                <li className={"h4"}>ED: eq.Name</li>
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