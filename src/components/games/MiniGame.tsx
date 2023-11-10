import React, {useState} from 'react';
import GameHeader from "./GameHeader";
import {useNavigate} from "react-router-dom";
import GameFooter from "./GameFooter";
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import Connexion from "./Connexion";

function MiniGame() {
    const navigate = useNavigate();
    const [t] = useTranslation();

    const [tab, setTab] = useState('home');
    const tabs = [
        { id: 'home', label: 'home' },
        { id: 'catalogue', label: 'catalogue' }
    ];

    // TODO: Finir le jeu et arranger le reste
    return (
        <div id="acceuil" className="p-5 bg-info min-vh-100">
            <GameHeader />
            {
                tabs.map((tabItem) => (
                        <button
                            key={tabItem.id}
                            className={`col-md-3 btn btn-outline-secondary mx-2 ${tab === tabItem.id ? 'active' : ''}`}
                            onClick={() => {
                                setTab(tabItem.id)
                            }}
                        >
                            {t(tabItem.label)}
                        </button>
                ))
            }
            {tab === 'home' && <Connexion />}

            <GameFooter />
        </div>
    );
}

export default MiniGame;
