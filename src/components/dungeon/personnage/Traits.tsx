import {Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";

function Traits() {
    const {t} = useTranslation();
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