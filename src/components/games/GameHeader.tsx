import {useNavigate} from "react-router-dom";


function GameHeader() {
    const navigate = useNavigate();
    return (
        <div className="bg-info">
            <div className="row">
                <div id="enTete" className="col text-center text-white p-5">
                    <h1>MiniJeux.com</h1>
                </div>
            </div>

            <div className="row bg-dark">
                <nav className="col-lg-8 col-md-5 col-sm-5 navbar navbar-expand-sm navbar-light pb-0 mt-2">
                    <ul className="navbar-nav">
                        <li className="nav-item bg-light active rounded-top">
                            <button className="nav-link mb-2 font-weight-bold text-primary"
                                    onClick={() => {navigate('/MiniGame')}}>Page d'acceuille</button>
                        </li>
                        <li className="nav-item bg-white border">
                            <button className="nav-link font-weight-bold text-primary" id="aCata"
                                    onClick={() => {navigate('/MiniGame/Catalogue')}}>catalogue</button>
                        </li>
                    </ul>
                </nav>

                <div className="col-lg-4 col-md-6 col-sm-7 text-right mt-3" id="connexion">
                    <p className="d-inline-block text-white" id="utilisateur">Veuillez vous connecter</p>
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
    )
}

export default GameHeader;