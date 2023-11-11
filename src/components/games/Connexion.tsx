import React, {useState} from 'react';
import {Accordion, Button, Card, Form} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import GameUser from "../../assets/models/user";
import {toast} from "react-toastify";

interface ConnexionProps {
    setTab: (tab: string) => void;
    setUser: (user: GameUser) => void;
}

function Connexion({setTab, setUser}: ConnexionProps) {
    const [t] = useTranslation();
    const [loginForm, setLoginForm] = useState({username: '', mdp: ''});
    const [creationForm, setCreationForm] = useState({email: '', username: '', mdp: '', mdp2: ''});
    const [createFormInfo, setCreateFromInfo] = useState([
        {
            name: 'username',
            label: 'pages.common.username',
            placeholder: 'pages.common.enterUsername',
            type: 'text',
            warning: ''
        },
        {
            name: 'email',
            label: 'pages.common.email',
            placeholder: 'pages.common.enterEmail',
            type: 'email',
            warning: ''
        },
        {
            name: 'mdp',
            label: 'pages.common.password',
            placeholder: 'PassWord123',
            type: 'password',
            warning: ''
        },
        {
            name: 'mdp2',
            label: 'pages.common.confirmPassword',
            placeholder: 'PassWord123',
            type: 'password',
            warning: ''
        }
    ])
    const [loginFormInfo, setLoginFromInfo] = useState([
        {
            name: 'username',
            label: 'pages.common.username',
            placeholder: 'pages.common.enterUsername',
            type: 'text',
            warning: ''
        },
        {
            name: 'mdp',
            label: 'pages.common.password',
            placeholder: 'PassWord123',
            type: 'password',
            warning: ''
        }
    ])

    // TODO: get tous Regex de BE
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const courielRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // TODO: créer un compte pour le jeu?
    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        let isValid = true;

        if (!passwordRegex.test(loginForm.mdp)) {
            toast.error(t('toast.error.password'));
            setLoginFromInfo(loginFormInfo.map((formInfo, index) => {
                if (formInfo.name === 'mdp'){
                    formInfo.warning = 'errors.password';
                    console.log("mdp", formInfo.warning, " : ", formInfo.name)
                }
                return formInfo;
            }))
            isValid = false;
        } else if (loginForm.username.trim().length < 4) {
            toast.error(t('toast.error.username'));
            setLoginFromInfo(loginFormInfo.map((formInfo, index) => {
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
        gameUser.username = loginForm.username;
        gameUser.password = loginForm.mdp;
        setUser(gameUser);
        setTab('catalogue');
    }

    function handleCreation(e: React.FormEvent) {
        e.preventDefault();
        let isValid = true;

        if (creationForm.username.trim().length < 4) {
            toast.error(t('toast.error.username'));
            setCreateFromInfo(createFormInfo.map((formInfo, index) => {
                if (formInfo.name === 'username')
                    formInfo.warning = 'errors.username';
                return formInfo;
            }))
            isValid = false;
        } else if (!courielRegex.test(creationForm.email)) {
            toast.error(t('toast.error.email'));
            setCreateFromInfo(createFormInfo.map((formInfo, index) => {
                if (formInfo.name === 'email')
                    formInfo.warning = 'errors.email';
                return formInfo;
            }))
            isValid = false;
        } else if (!passwordRegex.test(creationForm.mdp)) {
            toast.error(t('toast.error.password'));
            setCreateFromInfo(createFormInfo.map((formInfo, index) => {
                if (formInfo.name === 'mdp')
                    formInfo.warning = 'errors.password';
                return formInfo;
            }))
            isValid = false;
        } else if (creationForm.mdp !== creationForm.mdp2) {
            toast.error(t('toast.error.passwords'));
            setCreateFromInfo(createFormInfo.map((formInfo, index) => {
                if (formInfo.name === 'mdp2')
                    formInfo.warning = 'errors.passwords';
                return formInfo;
            }))
            isValid = false;
        }

        if (!isValid)
            return;

        let gameUser = new GameUser();
        gameUser.email = creationForm.email;
        gameUser.username = creationForm.username;
        gameUser.password = creationForm.mdp;
        setUser(gameUser);
        setTab('catalogue');
    }

    function handleLoginChange(e: any) {
        setLoginFromInfo(loginFormInfo.map((formInfo, index) => {
            if (formInfo.name === e.target.id)
                formInfo.warning = '';
            return formInfo;
        }))
        setLoginForm({...loginForm, [e.target.id]: e.target.value});
    }

    function handleCreationChange(e: any) {
        setCreateFromInfo(createFormInfo.map((formInfo, index) => {
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
                                                <Form.Group className="mb-3" controlId={formInfo.name}>
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
                                                <Form.Group className="mb-3" controlId={formInfo.name}>
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
