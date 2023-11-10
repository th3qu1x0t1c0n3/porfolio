import React from "react";
import {useNavigate} from "react-router-dom";

const References = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Lien utiliser pour la page principale</h1>
            <ul>
                <li><a href="https://ca.talent.com/fr/salary?job=cloud+architect">Salaire</a></li>
                <li><a href="https://www.youtube.com/watch?v=eRx6pFRwVDA">Dans la vie d'une architecte Cloud</a></li>
                <li><a
                    href="https://www.randstad.ca/fr/chercheurs-demplois/explorer-les-secteurs/technologies/emplois-darchitecte-de-solutions/">Aider
                    à trouver un emploi</a></li>
                <li>
                    <button id="Page" onClick={() => navigate("/architectCloud")} style={{fontSize: "50px"}}>Retour page
                        d'acceuil
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default References;
