import {IProjet} from "../models/projet";
import prevArchitectCloud from "../Images/architectCloud.png";
import prevPortailJeux from "../Images/portailJeux.png";
import prevDungeon from "../Images/dungeon.png";

export const mesProjets: IProjet[] = [{
    titre: "projects.architect.title",
    auteur: "Louis-Philippe Forget",
    image: prevArchitectCloud,
    desc: "projects.architect.description",
    lien: "/architectCloud#acceuil"
}, {
    titre: "projects.games.title",
    auteur: "Louis-Philippe Forget",
    image: prevPortailJeux,
    desc: "projects.games.description",
    lien: "/MiniGame#acceuil"
}, {
    titre: "projects.d&d.title",
    auteur: "Louis-Philippe Forget",
    image: prevDungeon,
    desc: "projects.d&d.description",
    lien: "/dungeon/personnage#acceuil"
},
// {
//   titre: "Magasin ecom",
//   auteur: "Louis-Philippe Forget",
//   image: "./assets/Images/dungeon.png",
//   desc: "N/A",
//   lien: "/ecommerce"
// }
]
