import React, {useState} from 'react';
import {Accordion, Button, Card, Form} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import GameUser from "../../../assets/models/user";
import {toast} from "react-toastify";
import {emailRegex, passwordRegex} from "../../../App";
import FormInput from "../../../assets/models/elements/Form";

interface ConnexionProps {
    setTab: (tab: string) => void;
    setUser: (user: GameUser) => void;
}

function Connexion({setTab, setUser}: ConnexionProps) {
    const [t] = useTranslation();
    const [loginForm, setLoginForm] = useState({
        username: '',
        mdp: ''
    });
    const [creationForm, setCreationForm] = useState({
        email: '',
        username: '',
        mdp: '',
        mdp2: ''
    });
    const [createFormInfo, setCreateFromInfo] = useState([
        new FormInput('username', 'pages.common.username', 'text', 'pages.common.enterUsername', ''),
        new FormInput('email', 'pages.common.email', 'text', 'pages.common.enterEmail', ''),
        new FormInput('mdp', 'pages.common.password', 'password', 'PassWord123', ''),
        new FormInput('mdp2', 'pages.common.confirmPassword', 'password', 'PassWord123', '')
    ])
    const [loginFormInfo, setLoginFromInfo] = useState([
        new FormInput('username', 'pages.common.username', 'text', 'pages.common.enterUsername', ''),
        new FormInput('mdp', 'pages.common.password', 'password', 'PassWord123', '')
    ])

    // TODO: créer un compte pour le jeu?
    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        let isValid = true;

        if (!passwordRegex.test(loginForm.mdp)) {
            toast.error(t('toast.error.password'));
            setLoginFromInfo(loginFormInfo.map((formInfo) => {
                if (formInfo.name === 'mdp'){
                    formInfo.warning = 'errors.password';
                }
                return formInfo;
            }))
            isValid = false;
        }
        if (loginForm.username.trim().length < 4) {
            toast.error(t('toast.error.username'));
            setLoginFromInfo(loginFormInfo.map((formInfo) => {
                if (formInfo.name === 'username')
                    formInfo.warning = 'errors.username';
                return formInfo;
            }))
            isValid = false;
        }
        if (!isValid){
            return;
        }

        let gameUser = new GameUser();
        gameUser.init('', loginForm.username, loginForm.mdp)
        setUser(gameUser);
        setTab('catalogue');
    }

    function handleCreation(e: React.FormEvent) {
        e.preventDefault();
        let isValid = true;

        if (creationForm.username.trim().length < 4) {
            toast.error(t('toast.error.username'));
            setCreateFromInfo(createFormInfo.map((formInfo) => {
                if (formInfo.name === 'username')
                    formInfo.warning = 'errors.username';
                return formInfo;
            }))
            isValid = false;
        }
        if (!emailRegex.test(creationForm.email)) {
            toast.error(t('toast.error.email'));
            setCreateFromInfo(createFormInfo.map((formInfo) => {
                if (formInfo.name === 'email')
                    formInfo.warning = 'errors.email';
                return formInfo;
            }))
            isValid = false;
        }
        if (!passwordRegex.test(creationForm.mdp)) {
            toast.error(t('toast.error.password'));
            setCreateFromInfo(createFormInfo.map((formInfo) => {
                if (formInfo.name === 'mdp')
                    formInfo.warning = 'errors.password';
                return formInfo;
            }))
            isValid = false;
        }
        if (creationForm.mdp !== creationForm.mdp2) {
            toast.error(t('toast.error.passwords'));
            setCreateFromInfo(createFormInfo.map((formInfo) => {
                if (formInfo.name === 'mdp2')
                    formInfo.warning = 'errors.passwords';
                return formInfo;
            }))
            isValid = false;
        }

        if (!isValid)
            return;

        let gameUser = new GameUser();
        gameUser.init(creationForm.email, creationForm.username, creationForm.mdp)
        setUser(gameUser);
        setTab('catalogue');
    }

    function handleLoginChange(e: any) {
        setLoginFromInfo(loginFormInfo.map((formInfo) => {
            if (formInfo.name === e.target.id)
                formInfo.warning = '';
            return formInfo;
        }))
        setLoginForm({...loginForm, [e.target.id]: e.target.value});
    }

    function handleCreationChange(e: any) {
        setCreateFromInfo(createFormInfo.map((formInfo) => {
            if (formInfo.name === e.target.id)
                formInfo.warning = '';
            return formInfo;
        }))
        setCreationForm({...creationForm, [e.target.id]: e.target.value});
    }

    return (
        <div className="row pt-4 p-3 bg-white">
            <div className="col">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Button as={Button} variant="outline-info" eventKey="0">
                                    {t('pages.common.login')}
                                </Accordion.Button>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <Form className="mb-4" autoComplete="off">
                                        {
                                            loginFormInfo.map((formInfo, index) => (
                                                <Form.Group key={index} className="mb-3" controlId={formInfo.name}>
                                                    <Form.Label>{t(formInfo.label)}</Form.Label>
                                                    <Form.Control className={`${formInfo.warning !== '' ? "is-invalid" : ""}`}
                                                                  onChange={handleLoginChange} type={formInfo.type}
                                                                  placeholder={t(formInfo.placeholder)}/>
                                                    <h5 className="text-danger">{t(formInfo.warning)}</h5>
                                                </Form.Group>
                                            ))
                                        }
                                        <div className="text-center mt-4 mb-2">
                                            <Button variant="success" className="me-2" onClick={handleLogin}>
                                                {t('pages.common.login')}
                                            </Button>
                                            <button className={"btn"} style={{fontSize: '12px'}}
                                                    onClick={() => setTab('maintenance')}>{t('pages.common.forgotPassword')}</button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Button as={Button} variant="outline-info" eventKey="1">
                                    {t('pages.common.signUp')}
                                </Accordion.Button>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <Form autoComplete="off">
                                        {
                                            createFormInfo.map((formInfo, index) => (
                                                <Form.Group key={index} className="mb-3" controlId={formInfo.name}>
                                                    <Form.Label>{t(formInfo.label)}</Form.Label>
                                                    <Form.Control className={`${formInfo.warning !== '' ? "is-invalid" : ""}`}
                                                                  onChange={handleCreationChange} type={formInfo.type}
                                                                  placeholder={t(formInfo.placeholder)}/>
                                                    <h5 className="text-danger">{t(formInfo.warning)}</h5>
                                                </Form.Group>
                                            ))
                                        }
                                        <div className="text-center mt-4">
                                            <Button variant="success" className="me-1" type="button"
                                                    onClick={handleCreation}>
                                                {t('pages.common.signUp')}
                                            </Button>
                                            <Button variant="danger" className="ms-1" type="reset">
                                                {t('pages.common.cancel')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Connexion;
