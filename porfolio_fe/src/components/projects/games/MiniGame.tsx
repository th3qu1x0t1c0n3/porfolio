import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Connexion from "./Connexion";
import Catalogue from "./Catalogue";
import Maintenance from "./Maintenance";
import SauveQuiPeut from "./SauveQuiPeut";
import GameUser from "../../../assets/models/user";
import {toast} from "react-toastify";
import NavTab from "../../../assets/models/elements/NavTab";
import { Nav } from 'react-bootstrap';

function MiniGame() {
    const [t] = useTranslation();
    const tabs = [
        new NavTab('home', 'pages.common.home'),
        new NavTab('catalogue', 'pages.games.catalog'),
        new NavTab('sauveQuiPeut', 'pages.games.sauveQuiPeut'),
        new NavTab('maintenance', 'pages.games.maintenance'),
    ];
    const [tab, setTab] = useState('home');
    const [user, setUser] = useState(new GameUser());

    function tabChange(tab: string) {
        switch (tab) {
            case 'catalogue':
                if (!user.isLogged){
                    toast.info(t('toast.info.notLogged'));
                    return;
                }
                break;
        }
        setTab(tab);
    }

    function logout() {
        setUser(new GameUser());
        setTab('home');
        toast.info(t('toast.info.logout'));
    }

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
                        <Nav>
                            {tabs.map((tabItem) => (
                                tabItem.link !== 'maintenance' &&
                                (tabItem.link !== 'sauveQuiPeut' || tab === 'sauveQuiPeut') && (
                                    <Nav.Item
                                        key={tabItem.link}
                                        className={`nav-item bg-secondary active rounded-top px-2 ${tab === tabItem.link ? 'bg-white' : ''}`}
                                    >
                                        <Nav.Link
                                            className={`nav-link mb-2 font-weight-bold text-dark`}
                                            onClick={() => tabChange(tabItem.link)}
                                        >
                                            {t(tabItem.label)}
                                        </Nav.Link>
                                    </Nav.Item>
                                )
                            ))}
                        </Nav>
                    </nav>

                    <div className="col-lg-4 col-md-6 col-sm-7 text-right mt-3 text-end" id="connexion">
                        {
                            user.isLogged ?
                                <>
                                    <p className="d-inline-block text-white me-2" id="utilisateur">{t('pages.common.welcome')} {user.username}</p>
                                    <button className="d-inline-block bg-danger" id="btnDeco" onClick={logout}>{t('pages.common.logout')}</button>
                                </> :
                                <p className="d-inline-block text-white me-2" id="utilisateur">{t('pages.common.pleaseLogin')}</p>
                        }
                    </div>
                </div>

                <div className="modal fade" id="dlgErrModal" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="titre">Erreur</h5>
                                <button type="button" className="btn btn-danger" id="sortieDlg" aria-label="Close"> x
                                </button>
                            </div>
                            <div className="modal-body">
                                <p id="msg">Message d'erreur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {tab === 'home' && <Connexion setTab={setTab} setUser={setUser} />}
            {tab === 'catalogue' && <Catalogue setTab={setTab} user={user} />}
            {tab === 'sauveQuiPeut' && <SauveQuiPeut/>}
            {tab === 'maintenance' && <Maintenance/>}

            <div className="row bg-light">
                <div className="col text-center pt-3 mt-3">
                    <p>&copy; Louis-Philippe Forget, Cégep André-Laurendeau, Hiver 2022</p>
                </div>
            </div>
        </div>
    );
}

export default MiniGame;
