import {Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {ICharactere, ITrait} from "../../../../assets/models/dungeon/character";
import {dndService, personnageService} from "../../../../App";
import {toast} from "react-toastify";

interface ITraitsComponent {
    character: ICharactere
}

function Traits({character}: ITraitsComponent) {
    const {t} = useTranslation();
    const [traits, setTraits] = useState<ITrait[]>([]);

    useEffect(() => {
        let newTraits: ITrait[] = [];
        personnageService.getTrait(character.id).then((response) => {
            if (response === undefined) return;
            response.map((traitRef) => {
                dndService.getTrait(traitRef.trait!).then((response) => {
                    if (response === undefined) return;
                    if (traits.includes(response)) return;
                    if (response.name === undefined) return;
                    newTraits.push(response);
                })
            })
            setTraits(newTraits);
        }).catch((error) => {
            toast.error(error);
        })
    }, []);

    return (
        <>
            <h3 className="text-white text-center mb-3 mt-4">{t('pages.dungeon.traits')}</h3>
            <div className="overflow-auto traits-personnage">
                {
                    traits.map((trait, index) => {
                        return <Card className="card mt-3" key={index}>
                            <Card.Body >
                                <Card.Title>{trait.name}</Card.Title>
                                <Card.Text>{trait.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        </>
    )
}

export default Traits;