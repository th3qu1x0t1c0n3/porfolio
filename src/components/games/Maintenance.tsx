import sadFace from "../../assets/Images/sadFace.jpg"
import GameHeader from "./GameHeader";

function Maintenance(){
    return(
        <>
            <GameHeader />
            <div className="row">
                <h1 className="col">Page est en cours de maintenace nous somme désolé de cet inconvéniant</h1>
            </div>
            <div className="row">
                <img className="col" src={sadFace} alt="bonhomme baboune" width="1050" />
            </div>
        </>
    )
}

export default Maintenance;