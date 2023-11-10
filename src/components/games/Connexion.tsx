
import React from 'react';
import {useNavigate} from "react-router-dom";
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

function Connexion({setTab}: {setTab: (tab: string) => void}) {

    const navigate = useNavigate();
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
                                    Connexion
                                </Accordion.Button>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <Form className="mb-4" autoComplete="off">
                                        <Form.Group className="mb-3" controlId="user">
                                            <Form.Label>Utilisateur</Form.Label>
                                            <Form.Control type="text" placeholder="Entrer votre utilisateur" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mdp">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control type="password" placeholder="" />
                                        </Form.Group>

                                        <div className="text-center mt-4 mb-2">
                                            <Button variant="success" className="me-2" onClick={handleLogin}>
                                                Se Connecter
                                            </Button>
                                            <a href="" onClick={() => navigate('/MiniGame/Maintenance')} style={{ fontSize: '12px' }}>Mot de passe oublié?</a>
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
                                    Inscription
                                </Accordion.Button>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <Form autoComplete="off">
                                        <Form.Group className="mb-3" controlId="userIn">
                                            <Form.Label>Utilisateur</Form.Label>
                                            <Form.Control type="text" placeholder="Choisir un nom d'utilisateur" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pseudo">
                                            <Form.Label>Pseudonyme</Form.Label>
                                            <Form.Control type="text" placeholder="Choisir un pseudonyme" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mdpIn">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control type="password" placeholder="PassWord123" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mdpIn2">
                                            <Form.Label>Confirmer mot de passe</Form.Label>
                                            <Form.Control type="password" placeholder="PassWord123" />
                                        </Form.Group>

                                        <div className="text-center mt-4">
                                            <Button variant="success" className="me-1" type="button" onClick={handleCreation}>
                                                S'inscrire
                                            </Button>
                                            <Button variant="danger" className="ms-1" type="reset">
                                                Annuler
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
