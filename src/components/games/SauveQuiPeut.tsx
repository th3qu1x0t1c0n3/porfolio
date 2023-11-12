import React from "react";


function SauveQuiPeut() {
    // TODO: Implémenter le jeu
    return (
        <div className={`row pt-4 p-3 bg-white`}>
            <h1 className={"text-center"}>Sauve qui peut</h1>
            <h1 className={"text-center"}>Le jeu est à faire en tsx</h1>
            <div className="row">
                <div className="col">

                    <div id="planJeu">
                        <div id="safeZone"></div>
                        <div id="acteur"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <input className="btn btn-success m-2" type="button" id="btnGo" value="Go" />
                    <input className="btn btn-primary m-2" type="button" id="btnRecommencer" value="Recommencer" />
                </div>
            </div>
        </div>
    )
}

export default SauveQuiPeut;