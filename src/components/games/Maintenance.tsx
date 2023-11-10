import sadFace from "../../assets/Images/sadFace.jpg"

function Maintenance(){
    return(
        <div className={`row pt-4 p-3 bg-white`}>
            <div className="row">
                <h1 className="col">Page est en cours de maintenace nous somme désolé de cet inconvéniant</h1>
            </div>
            <div className="row">
                <img className="col" src={sadFace} alt="bonhomme baboune" width="1050" />
            </div>
        </div>
    )
}

export default Maintenance;