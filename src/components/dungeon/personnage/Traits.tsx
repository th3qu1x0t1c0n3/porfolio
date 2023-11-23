import {Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {ICharactere, ITrait} from "../../../assets/models/dungeon/character";
import {dndService, personnageService} from "../../../App";

interface ITraitsComponent {
    character: ICharactere
}
function Traits({character}: ITraitsComponent) {
    const {t} = useTranslation();
    const [traits, setTraits] = useState<ITrait[]>([]);

    // useEffect(() => {
    //     personnageService.getTrait(character.id).then((response) => {
    //         if (response === undefined) return;
    //         response.map((trait) => {
    //             dndService.getTrait(trait.reference).then((response) => {
    //                 if (response === undefined) return;
    //                 setTraits(traits => [...traits, response]);
    //             })
    //         })
    //     }).catch((error) => {
    //
    //     })
    // }, []);

    return (
        <>
            <h3 className="text-white text-center mb-3 mt-4">{t('pages.dungeon.traits')}</h3>
            <div className="overflow-auto traits-personnage">
                {/*TODO: Loop sur chaque*/}
                <Card className="card mt-3">
                    <Card.Body >
                        <Card.Title>name</Card.Title>
                        <Card.Text>desc</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Traits;