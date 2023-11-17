import {Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";

interface IWeapons {
}

function Weapons({}: IWeapons) {
    const {t} = useTranslation();
    return (
        <>
            <h3 className="text-white text-center mt-4">{t('pages.dungeon.weapons')}</h3>
            <div className={"row bg-white m-2"}>
                <div className="col-4">ED: nom</div>
                <div className="col-2">ED: variants</div>
                <div className="col-2">ED: damDice<span>/ED: damDice</span></div>
                <div className="col-4">
                    ED: name dam type
                </div>
                <Form className="col-12">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                </Form>
            </div>

        </>
    )
}

export default Weapons;