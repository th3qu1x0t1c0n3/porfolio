import {IJeu} from "../../assets/models/projet";
import {useNavigate} from "react-router-dom";
import sauveQuiPeut from "./../../assets/Images/sauveQuiPeut.png";
import pacMan from "./../../assets/Images/pac-man-peach-retro-games-hd-wallpaper-preview-200.jpg";
import duckHunt from "./../../assets/Images/35841-posts.article_lg-200.jpg";
import Pong from "./../../assets/Images/35828-posts.article_lg-200.jpg";
import ChuckyEgg from "./../../assets/Images/35834-posts.article_lg-200.jpg";
import Paperboy from "./../../assets/Images/35829-posts.article_lg-200.jpg";
import React from "react";


function Catalogue({setTab}: {setTab: (tab: string) => void}){

    const leCatalogue: IJeu[] = [{
        nom: "Sauve qui peut",
        imgFile: sauveQuiPeut,
        url: "sauveQuiPeut",
        action: "sauveQuiPeut"
    }, {
        nom: "Pac Man",
        imgFile: pacMan,
        url: "maintenance",
        action: "na"
    }, {
        nom: "Duck Hunt",
        imgFile: duckHunt,
        url: "maintenance",
        action: "na"
    }, {
        nom: "Pong",
        imgFile: Pong,
        url: "maintenance",
        action: "na"
    }, {
        nom: "Chucky Egg",
        imgFile: ChuckyEgg,
        url: "maintenance",
        action: "na"
    }, {
        nom: "Paperboy",
        imgFile: Paperboy,
        url: "maintenance",
        action: "na"
    }];

    return(
        <div className={`row pt-4 p-3 bg-white`}>
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

            <div className="container">
                <div className="row mt-3 justify-content-center">
                    {leCatalogue.map((jeu, index) => (
                        <div key={index} className="col-lg-3 card p-0 ms-5 me-3 mt-3 mb-5">
                            <img className="card-body p-0" alt={jeu.nom} src={jeu.imgFile} />
                            <div className="card-footer text-center">
                                <button className="btn btn-outline-info text-dark" onClick={() => setTab(jeu.url)}>{jeu.nom}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalogue;