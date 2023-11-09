import React from 'react';
import GameHeader from "./GameHeader";
import {useNavigate} from "react-router-dom";
import GameFooter from "./GameFooter";
import { Accordion, Card, Button, Form } from 'react-bootstrap';

function MiniGame() {
    const navigate = useNavigate();

    // TODO: Finir le jeu et arranger le reste
    return (
        <div id="acceuil" className="p-5 bg-info min-vh-100">
            <GameHeader />
            <div className="row pt-4 p-2 bg-white">
                <div className="col">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Button as={Button} variant="outline-primary" eventKey="0">
                                    Connexion
                                </Accordion.Button>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
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
                                            <Button variant="success" className="me-2" onClick={() => { /* Add your logic here */ }}>
                                                Se Connecter
                                            </Button>
                                            <a href="/jeux/maintenance" style={{ fontSize: '12px' }}>Mot de passe oublié?</a>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Card.Header>
                                <Accordion.Button as={Button} variant="outline-primary" eventKey="1">
                                    Inscription
                                </Accordion.Button>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
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

                                        {/* Add other form groups for password and confirmation here */}

                                        <div className="text-center mt-4">
                                            <Button variant="success" className="me-1" type="button" onClick={() => { /* Add your logic here */ }}>
                                                S'inscrire
                                            </Button>
                                            <Button variant="danger" className="ms-1" type="reset">
                                                Annuler
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>

            <GameFooter />
        </div>
    );
}

export default MiniGame;
