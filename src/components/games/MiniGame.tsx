import React, {useState} from 'react';
import GameHeader from "./GameHeader";
import {useNavigate} from "react-router-dom";
import GameFooter from "./GameFooter";
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import Connexion from "./Connexion";
import Catalogue from "./Catalogue";
import Maintenance from "./Maintenance";
import SauveQuiPeut from "./SauveQuiPeut";

function MiniGame() {
    const navigate = useNavigate();
    const [t] = useTranslation();

    const [tab, setTab] = useState('home');
    const tabs = [
        { id: 'home', label: 'home' },
        { id: 'catalogue', label: 'catalogue' },
        { id: 'sauveQuiPeut', label: 'sauveQuiPeut' },
        { id: 'maintenance', label: 'maintenance' }
    ];

    // TODO: Finir le jeu et arranger le reste
    return (
        <div id="acceuil" className="p-5 bg-info min-vh-100">
            <div className="bg-info">
                <div className="row">
                    <div id="enTete" className="col text-center text-white p-5">
                        <h1>MiniJeux.com</h1>
                    </div>
                </div>

                <div className="row bg-dark">
                    <nav className="col-lg-8 col-md-5 col-sm-5 navbar navbar-expand-sm navbar-light pb-0 mt-2">
                        <ul className="navbar-nav">
                            {
                                tabs.map((tabItem) => (
                                    tabItem.id !== 'maintenance' &&
                                    <li className={`nav-item bg-secondary active rounded-top px-2 ${tab === tabItem.id ? 'bg-white' : ''}`} key={tabItem.id}>
                                        <button className={`nav-link mb-2 font-weight-bold text-dark ${tab === tabItem.id ? 'bg-white' : ''}`}
                                                onClick={() => {setTab(tabItem.id)}}
                                        >
                                            {t(tabItem.label)}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    {/*TODO: Changer si connecté ou pas*/}
                    <div className="col-lg-4 col-md-6 col-sm-7 text-right mt-3 text-end" id="connexion">
                        <p className="d-inline-block text-white me-2" id="utilisateur">Veuillez vous connecter</p>
                        <button className="d-inline-block bg-danger" id="btnDeco">Déconnexion</button>
                    </div>
                </div>

                <div className="modal fade" id="dlgErrModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="titre">Erreur</h5>
                                <button type="button" className="btn btn-danger" id="sortieDlg" aria-label="Close"> x </button>
                            </div>
                            <div className="modal-body">
                                <p id="msg">Message d'erreur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {tab === 'home' && <Connexion setTab={setTab} />}
            {tab === 'catalogue' && <Catalogue setTab={setTab} />}
            {tab === 'sauveQuiPeut' && <SauveQuiPeut />}
            {tab === 'maintenance' && <Maintenance />}

            <GameFooter />
        </div>
    );
}

export default MiniGame;
