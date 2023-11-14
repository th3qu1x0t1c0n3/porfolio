import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {DnDDice, IDice} from "../../../assets/models/dungeon/IDice";
import {useTranslation} from "react-i18next";

function Dice() {
    const {t} = useTranslation();
    const [desExpression, setDesExpression] = useState<string>('')
    const [jetDeDes, setJetDeDes] = useState<IDice[]>([])
    const [valid, setValid] = useState<boolean>(false)

    function throwDice(e: any) {
        e.preventDefault()
        const diceGroups = desExpression.split("+");
        setJetDeDes([]);
        const maxDes = [];

        for (const group of diceGroups) {
            const requete = group.split('d');
            if (requete.length === 2
                && Number.parseInt(requete[0]) > 0
                && Number.parseInt(requete[1]) > 0
            ) {
                maxDes.push(
                    ...new Array<number>(Number.parseInt(requete[0])).fill(Number.parseInt(requete[1]))
                );
            } else {
                setValid(false);
                return;
            }
        }
        setJetDeDes(maxDes.map((diceSize) => {
            setTimeout(() => {

            }, 500);
            return {
                diceSize,
                val: Math.floor(Math.random() * diceSize) + 1
            }
        }));
        setValid(true)
    }

    return (
        <div className={"text-white"}>
            <Form className={"mx-2"}>
                <Form.Group className="mb-3 row" controlId="exampleForm.ControlInput1">
                    <div className="d-flex w-75">
                        <Form.Control className={"col-8 me-1"} type={"text"} placeholder="3d4+2d10"
                                      value={desExpression}
                                      onChange={(e) => setDesExpression(e.target.value)}/>
                        <Button className={"btn-success col-4"} onClick={throwDice}>{t('pages.dungeon.throw')}</Button>
                    </div>
                </Form.Group>
            </Form>
            {valid && (
                <div>
                    {jetDeDes.map((item, index) => (
                        <Button key={index} variant={`${item.val % 2 === 0 ? 'info' : 'warning'}`} className={`m-1`} style={{cursor: "crosshair"}}>
                            <span className="h2">{item.val}</span>
                            <span className="h5 text-secondary">/{item.diceSize}</span>
                        </Button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dice;