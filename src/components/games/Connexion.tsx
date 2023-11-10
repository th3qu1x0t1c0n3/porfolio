import React from 'react';
import {Accordion, Button, Card, Form} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function Connexion({setTab}: { setTab: (tab: string) => void }) {
    const [t] = useTranslation();

    // TODO: créer un compte pour le jeu?
    function handleLogin() {
        setTab('catalogue');
    }

    function handleCreation() {
        setTab('catalogue');
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
                                        <Form.Group className="mb-3" controlId="user">
                                            <Form.Label>{t('pages.common.username')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('pages.common.enterUsername')}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mdp">
                                            <Form.Label>{t('pages.common.password')}</Form.Label>
                                            <Form.Control type="password" placeholder=""/>
                                        </Form.Group>

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
                                        <Form.Group className="mb-3" controlId="userIn">
                                            <Form.Label>{t('pages.common.email')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('pages.common.enterEmail')}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pseudo">
                                            <Form.Label>{t('pages.common.username')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('pages.common.enterUsername')}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mdpIn">
                                            <Form.Label>{t('pages.common.password')}</Form.Label>
                                            <Form.Control type="password" placeholder="PassWord123"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mdpIn2">
                                            <Form.Label>{t('pages.common.confirmPassword')}</Form.Label>
                                            <Form.Control type="password" placeholder="PassWord123"/>
                                        </Form.Group>

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
