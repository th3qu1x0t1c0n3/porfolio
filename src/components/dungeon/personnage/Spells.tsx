import {Accordion, Card, Button} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function Spells() {
    const {t} = useTranslation();
    return (
        <>
            <h3 className="text-white text-center mb-3 mt-4">{t('pages.dungeon.sorts')}</h3>
            <Accordion className="m-2 bg-dark text-white" defaultActiveKey="0">
                {/*TODO: map all*/}
                <Accordion.Item eventKey="0" className={"bg-dark text-white"}>
                    <Card className={"bg-dark text-white"}>
                        <Accordion.Button className={"bg-dark text-white"} as={Button} variant="link" eventKey="0">
                            ED: spells.name
                        </Accordion.Button>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p className="card-text">
                                <span className="badge bg-primary">
                                    ED: .school?.name
                                    ED: .level
                                </span>
                                    <span className="badge bg-danger">Casting Time: ED</span>
                                    <span className="badge bg-success">Range: ED</span>
                                    <span className="badge bg-info">Components: ED</span>
                                    <span className="badge bg-secondary">Duration:ED</span>
                                </p>
                                <p className="card-text">
                                    text
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Spells;