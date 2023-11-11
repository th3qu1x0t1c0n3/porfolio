import React from "react";


function SauveQuiPeut() {
    return (
        <div className={`row pt-4 p-3 bg-white`}>
            <h1 className={"text-center"}>Sauve qui peut</h1>
            <h2>À faire!!!</h2>
            <div className="row">
                <div className="col">
                    <h2 id="chrono" className="col-4 text-left">Chrono</h2>

                    <div id="planJeu">
                        <div id="safeZone"></div>
                        <div id="acteur"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <input className="btn btn-success" type="button" id="btnGo" value="Go" />
                    <input className="btn btn-primary" type="button" id="btnRecommencer" value="Recommencer" />
                </div>
            </div>
        </div>
    )
}

export default SauveQuiPeut;