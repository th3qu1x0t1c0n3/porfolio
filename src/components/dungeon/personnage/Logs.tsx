import {useTranslation} from "react-i18next";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {ILogs} from "../../../assets/models/dungeon/logs";
import {preLogs} from "../../../assets/pseudoService/projetPseudoService";

function Logs() {
    const {t} = useTranslation();
    const [messages, setMessages] = useState<ILogs[]>(preLogs)

    function logMessage(e: any) {
        e.preventDefault();

        const date = document.getElementById('dateTime') as HTMLInputElement;
        const message = document.getElementById('log') as HTMLInputElement;

        if (date && message) {
            const newMessage = {
                date: date.value,
                message: message.value
            }
            setMessages([...messages, newMessage])
            date.value = '';
            message.value = '';
        }
    }

    return (
        <div className="row">
            <h3 className="text-white text-center mb-3 mt-4">{t('pages.dungeon.journal')}</h3>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <Form onSubmit={logMessage}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="form-label text-white" htmlFor="dateTime">
                            {t('pages.dungeon.dateTime')}
                        </Form.Label>
                        <Form.Control type="datetime" id="dateTime"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="form-label text-white mt-3" htmlFor="log">
                            {t('pages.dungeon.comments')}
                        </Form.Label>
                        <Form.Control as="textarea" id="log" size={"lg"} className="text-dark"/>
                    </Form.Group>
                    <Button variant="success" type="submit">{t('pages.dungeon.add')}</Button>
                </Form>
            </div>
            <div className="col-12 col-md-8 col-lg-9 mt-4">
                {
                    messages.map((message, index) => (
                        <div className="row alert alert-warning mt-2 mx-3" key={index}>
                            <div className="col-lg-2 col-4">
                                {message.date}
                            </div>
                            <div className="col-lg-10 col-8">
                                {message.message}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Logs;