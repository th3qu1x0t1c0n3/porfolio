import React from 'react';
import GameHeader from "./GameHeader";
import {useNavigate} from "react-router-dom";
import GameFooter from "./GameFooter";

function MiniGame() {
    const navigate = useNavigate();

    // TODO: Finir le jeu et arranger le reste
    return (
        <div id="acceuil" className="p-5 bg-info min-vh-100">
            <GameHeader />
            <div className="row pt-4 p-2 bg-white">
                <div className="col">
                    <div id="accordion">
                        <div className="accordion-item">
                            <h5 className="accordion-header" id="header-connex">
                                <button className="btn btn-outline-primary" data-bs-toggle="collapse"
                                        data-bs-target="#connex" aria-expanded="true" aria-controls="connex">
                                    Connexion </button>
                            </h5>

                            <div id="connex" className="collapse show border rounded p-3 ml-5 mr-5 mt-4" aria-labelledby="header-connex" data-bs-parent="#accordion">
                                <form className="mb-4" autoComplete="off">
                                    <label className="col-12 m-auto" htmlFor="user">Utilisateur</label>
                                    <input className="champ col-12" type="text" id="user" placeholder="Entrer votre utilisateur" />

                                    <label className="col-12 mt-2 mb-0" htmlFor="mdp">Mot de passe</label>
                                    <input className="champ col-12" type="password" id="mdp" placeholder="" />

                                    <div className="col text-center mt-4 mb-2">
                                        <button className="btn btn-success me-2" id="btnCo" onClick={() => {navigate('/MiniGame/catalogue')}}>
                                            Se Connecter</button>
                                        <a href="/jeux/maintenance" style={{ fontSize: '12px' }}>mot de passe oublié?</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h5 className="accordion-header mt-3" id="header-ins">
                                <a className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#ins" aria-expanded="true" aria-controls="ins">Inscription</a>
                            </h5>

                            <div id="ins" className="collapse border rounded p-3 ml-5 mr-5 mt-4" aria-labelledby="header-ins" data-bs-parent="#accordion">
                                <form autoComplete="off">
                                    <label className="col-12 m-auto" htmlFor="userIn">Utilisateur</label>
                                    <input className="champ col-12" type="text" id="userIn" placeholder="Choisir un nom d'utilisateur" />

                                    <label className="col-12 m-auto" htmlFor="pseudo">Pseudonyme</label>
                                    <input className="champ col-12" type="text" id="pseudo" placeholder="Choisir un pseudonyme" />

                                    <label className="col-12 mt-2 mb-0" htmlFor="mdpIn">Mot de passe</label>
                                    <input className="champ col-12" type="password" id="mdpIn" placeholder="Mot de passe" />

                                    <label className="col-12 mt-2 mb-0" htmlFor="mdpInConf">Confirmation du mot de passe</label>
                                    <input className="champ col-12" type="password" id="mdpInConf" placeholder="Confirmation du Mot de passe" />

                                    <div className="col text-center mt-4">
                                        <input className="btn btn-success me-1" type="button" value="S'inscrire" id="btnInscrip" onClick={() => {}} />
                                        <input className="btn btn-danger ms-1" type="reset" value="Annuler" id="btnAnnule" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GameFooter />
        </div>
    );
}

export default MiniGame;
