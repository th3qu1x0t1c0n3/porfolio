import React from "react";
import PlanJeu from "./escape/PlanJeu";

function SauveQuiPeut() {

    // TODO: Implement the game rendering logic based on the game state

    return (
        <div className={`row pt-4 p-3 bg-white`}>
            <h1 className={"text-center"}>Sauve qui peut</h1>
            <PlanJeu/>
            {/*<div className="row">*/}
            {/*    <div className="col">*/}
            {/*        <div id="planJeu">*/}
            {/*            /!* Render game actor and enemies based on state *!/*/}
            {/*            <div id="safeZone"></div>*/}
            {/*            <div id="acteur"></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*    <div className="col text-center">*/}
            {/*        <input className="btn btn-success m-2" type="button" id="btnGo" value="Go"/>*/}
            {/*        <input className="btn btn-primary m-2" type="button" id="btnRecommencer" value="Recommencer"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default SauveQuiPeut;