import {Accordion, Button, Card} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import {dndService, personnageService} from "../../../../App";
import {useEffect, useState} from "react";
import {ISpellAffiche} from "../../../../assets/models/dungeon/spells";
import {ICharactere} from "../../../../assets/models/dungeon/character";
import {toast} from "react-toastify";

interface ISpellsComponent {
    character: ICharactere
}

function Spells({character}: ISpellsComponent) {
    const {t} = useTranslation();
    const [spells, setSpells] = useState<ISpellAffiche[]>([])

    useEffect(() => {
        getSpell()
    }, [character]);

    function getSpell() {
        let newSpells: ISpellAffiche[] = [];
        personnageService.getSpells(character.id).then((response) => {
            response.map((spell) => {
                dndService.getSpell(spell.reference).then((response) => {
                    if (response === undefined) return;
                    let spellAffiche: ISpellAffiche = {qty: spell.qty, spells: response};
                    if (spells.includes(spellAffiche)) return;
                    newSpells.push(spellAffiche)
                })
            })
            setSpells(newSpells)
        }).catch((error) => {
            toast.error(error.message)
        })
    }

    return (
        <>
            <h3 className="text-white text-center mb-3 mt-4">{t('pages.dungeon.sorts')}</h3>
            <Accordion className="m-2 bg-dark text-white" defaultActiveKey="0">
                {
                    spells.map((spell, index) => {
                        return <Accordion.Item key={index} eventKey={index.toString()} className={"bg-dark text-white"}>
                            <Card className={"bg-dark text-white"}>
                                <Accordion.Button className={"bg-dark text-white my-0 px-0 pb-0 pe-auto"} as={Button} variant="link"
                                                  eventKey={index.toString()}>
                                <p className={"ms-3 me-auto"}>{spell.spells.name}</p>
                                {
                                    Array.from(Array(spell.qty).keys()).map((key) => {
                                        // TODO: make it go in the end
                                        return <input key={key} type="checkbox"
                                                      className="form-check-input mx-1"/>
                                    })
                                }
                                </Accordion.Button>
                                <Accordion.Collapse eventKey={index.toString()}>
                                    <Card.Body>
                                        <p className="card-text">
                                            <span className="badge bg-primary">
                                                {spell.spells.school?.name}
                                                {spell.spells.level}
                                            </span>
                                            <span
                                                className="badge bg-danger">{t('pages.dungeon.castingTime')} {spell.spells.casting_time}</span>
                                            <span
                                                className="badge bg-success">{t('pages.dungeon.range')} {spell.spells.range}</span>
                                            <span
                                                className="badge bg-info">{t('pages.dungeon.components')} {spell.spells.components}</span>
                                            <span
                                                className="badge bg-secondary">{t('pages.dungeon.duration')} {spell.spells.duration}</span>
                                        </p>
                                        <p className="card-text">
                                            {spell.spells.desc}
                                        </p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion.Item>
                    })
                }
            </Accordion>
        </>
    )
}

export default Spells;