import React from "react";
import { useNavigate } from "react-router-dom";
import architectCloud from "../../assets/Images/arcCloud/ArchitecteCloud.jpg";

function ArchitectCloud() {
    const navigate = useNavigate();

    const headerStyle: React.CSSProperties = {
        borderBottom: "2px solid black",
        backgroundColor: "lightgrey",
        textAlign: "center",
    };

    const h1Style: React.CSSProperties = {
        fontSize: "100px",
        backgroundColor: "lightgreen",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
    };

    const pStyle: React.CSSProperties = {
        textAlign: "center",
        fontSize: "20px",
    };

    const imgStyle: React.CSSProperties = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    };

    const buttonStyle: React.CSSProperties = {
        border: "2px solid blue",
        backgroundColor: "lightblue",
        textDecoration: "none",
        fontSize: "20px",
    };

    const asideButtonStyle: React.CSSProperties = {
        display: "block",
        border: "2px solid blue",
        backgroundColor: "lightblue",
        textDecoration: "none",
        fontSize: "20px",
    };

    const tableStyle: React.CSSProperties = {
        borderCollapse: "collapse",
        width: "800px",
        tableLayout: "fixed",
    };

    const trStyle: React.CSSProperties = {
        height: "50px",
    };

    const thStyle: React.CSSProperties = {
        backgroundColor: "black",
        color: "white",
    };

    const sectionStyle: React.CSSProperties = {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
    };

    const gaucheStyle: React.CSSProperties = {
        float: "left",
        background: "lightblue",
        width: "20%",
        height: "3500px",
    };

    const droiteStyle: React.CSSProperties = {
        float: "right",
        background: "lightblue",
        width: "20%",
        height: "3500px",
    };

    return (
        <div>
            <header style={headerStyle}>
                <h1 id="acceuil" style={h1Style}>
                    Architecte Cloud
                </h1>
                <p style={pStyle}>
                    Autrement appelé : Architecte virtualisation ou Ingénieur cloud
                </p>
                <p style={pStyle}>
                    Le métier d'architecte cloud consiste à répartir la tâche d'un gros
                    problème en plusieurs petits problèmes.
                </p>
                <img
                    className="fit-picture"
                    src={architectCloud}
                    alt="Représentation du métier d'architecte cloud"
                    width="500"
                    height="250"
                    style={imgStyle}
                />
                <button
                    onClick={() => navigate("/architectCloud#acceuil")}
                    style={buttonStyle}
                >
                    Page d'acceuil
                </button>
                <button onClick={() => navigate("/architectCloud/references")} style={buttonStyle}>
                    Référence
                </button>
            </header>
            <aside id="gauche" style={gaucheStyle}>
                <button
                    onClick={() => navigate("/architectCloud#acceuil")}
                    style={asideButtonStyle}
                >
                    Page d'acceuil
                </button>
                <button
                    onClick={() => navigate("/architectCloud#descrip")}
                    style={asideButtonStyle}
                >
                    Description
                </button>
                <button
                    onClick={() => navigate("/architectCloud#debouche")}
                    style={asideButtonStyle}
                >
                    Débouchés
                </button>
                <button
                    onClick={() => navigate("/architectCloud#conclu")}
                    style={asideButtonStyle}
                >
                    Conclusion
                </button>
            </aside>

            <aside id="droite" style={droiteStyle}></aside>

            <section id="descrip" style={sectionStyle}>
                <h2>Description</h2>
                <h3>Tâches et Responsabilité</h3>
                <p>
                    L'architecte cloud sert à :
                </p>
                <ol>
                    <li>Collecter le besoin à héberger ou à faire évoluer le Cloud.</li>
                    <li>Il aide à concevoir une solution pour un problème et de la déployer.</li>
                    <li>Participer au passage à l’exploitation de la solution.</li>
                    <li>Définir le design de la solution en proposant une architecture.</li>
                    <li>Mettre en place l’architecture et de rédiger les documents associés.</li>
                    <li>Assurer le support N3 de l’architecture déployée.</li>
                    <li>Animer les réunions de suivi de projet.</li>
                    <li>Automatiser les activités d’exploitation.</li>
                    <li>Former les équipes d’exploitation.</li>
                    <li>Faire évoluer la solution vers une optique de performance.</li>
                </ol>
                <h3>Milieu de travail</h3>
                <h4>type de travail</h4>
                <p>
                    L'architecte Cloud va principalement travailler de la maison. Parfois, il
                    sera nécessaire de faire des réunions entre équipes de travail pour faire
                    des mises aux points. C'est donc un travail qui se fait individuel, mais
                    qui requiert de bien travailler en équipe.
                </p>
                <h4>Entreprises</h4>
                <p>Il y a plusieurs types d'entreprises dans lesquels on peut travailler comme architecte Cloud.</p>
                <ul>
                    <li>IBM</li>
                    <li>Google</li>
                    <li>Microsoft</li>
                    <li>Éditeur de logiciel</li>
                </ul>
                <h4>Horaires</h4>
                <p>
                    Les horaires de travail sont plutôt au choix, car la plupart du travail se
                    fait à la maison. À part les réunions d'équipes, l'horaire se fait de 8h à
                    17h du lundi au vendredi.
                </p>
                <h3>Formation et compétence</h3>
                <p>Pour devenir un architecte Cloud, il y a deux options.</p>
                <h5>Première option</h5>
                <p>
                    Il faut être un développeur et, ensuite, avoir des certifications
                    supplémentaires pour devenir chef de projet.
                </p>
                <h5>Deuxième option</h5>
                <p>
                    Pour atteindre le métier d'architecte Cloud, il faut faire une maîtrise en
                    informatique cloud.
                </p>
                <h3>Compétence technique</h3>
                <p>
                    Il faut savoir comment un serveur de virtualisation fonctionne. Par exemple,
                    Azure, Openstack, AWS, Google CE & hadoop, etc.
                </p>
            </section>

            <section id="debouche" style={sectionStyle}>
                <h2>Débouchés</h2>
                <h3>Salaire</h3>
                <table style={tableStyle}>
                    <tbody>
                        <tr style={trStyle}>
                            <th style={thStyle}>Période de travail</th>
                            <th style={thStyle}>Salaire/heure($)</th>
                            <th style={thStyle}>Salaire/année($)</th>
                        </tr>
                        <tr style={trStyle}>
                            <th>Début</th>
                            <td>44$/h</td>
                            <td>85 000$</td>
                        </tr>
                        <tr style={trStyle}>
                            <th>Moyen</th>
                            <td>65$/h</td>
                            <td>125 000$</td>
                        </tr>
                        <tr style={trStyle}>
                            <th>Fin de carrière</th>
                            <td>90$/h</td>
                            <td>175 000$</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Évolution professionnelle</h3>
                <p>
                    Après être architecte Cloud, nous pouvons soit devenir chef de projet
                    informatique. Soit devenir le directeur des services informatiques.
                </p>
                <p>
                    En d'autres termes, le métier d'architecte Cloud est principalement une
                    profession que l'on devient après quelques années dans le domaine de
                    l'informatique.
                </p>
            </section>

            <section id="conclu" style={sectionStyle}>
                <h2>Conclusion</h2>
                <p>
                    En conclusion, je me verrais faire ce métier, car je suis quelqu'un qui sait
                    gérer son temps et qui est capable de travailler seul, comme en équipe. Je
                    suis aussi capable de bien gérer une tâche et de la séparer en plusieurs
                    petits problèmes. Je pense donc que je serais bon pour faire le métier
                    d'architecte cloud.
                </p>
                <p>
                    Pour plus d'information je vous invite à visiter le site de{" "}
                    <a
                        href="https://www.regionsjob.com/observatoire-metiers/fiche/architecte-cloud"
                        style={buttonStyle}
                    >
                        REGIONSJOB
                    </a>
                    .
                </p>
            </section>

            <aside></aside>

            <footer>
                <button
                    onClick={() => navigate("/architectCloud#acceuil")}
                    style={buttonStyle}
                >
                    Page d'acceuil
                </button>
                <p>&copy;Louis-Philippe Forget & &copy;Cégep André-Laurendeau</p>
            </footer>
        </div>
    );
}

export default ArchitectCloud;
