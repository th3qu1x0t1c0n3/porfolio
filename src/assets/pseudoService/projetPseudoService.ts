import {IProjet} from "../models/projet";
import prevArchitectCloud from "../Images/architectCloud.png";
import prevPortailJeux from "../Images/portailJeux.png";
import prevDungeon from "../Images/dungeon.png";
import {ICharactere} from "../models/dungeon/character";

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
    lien: "/dungeon#acceuil"
},
// {
//   titre: "Magasin ecom",
//   auteur: "Louis-Philippe Forget",
//   image: "./assets/Images/dungeon.png",
//   desc: "N/A",
//   lien: "/ecommerce"
// }
]

export const characs: ICharactere[] = [
    {
        id: "1",
        name: "Tester test",
        statistics: { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10 },
        race: "Human",
        player: "Player 1",
        classe: "Warrior",
        sousclasses: "Berserker",
        level: 1,
        background: "Soldier",
        synopsis: "A brave warrior",
        owner: "Player 1",
        image: "url_to_image",
        health: 20,
        currentHealth: 15,
        traits: [
            {
                trait: "Brave",
                description: "You have advantage on saving throws against being frightened."
            }
        ],
        armorClass: 16,
        initiative: 2,
        speed: 30
    },
    {
        id: "2",
        name: "Michel Michaud",
        statistics: { strength: 8, dexterity: 14, constitution: 12, intelligence: 14, wisdom: 10, charisma: 12 },
        race: "Elf",
        player: "Player 2",
        classe: "Rogue",
        sousclasses: "Thief",
        level: 1,
        background: "Criminal",
        synopsis: "A cunning rogue",
        owner: "Player 2",
        image: "url_to_image",
        health: 20,
        currentHealth: 10,
        traits: [
            {
                trait: "Nimble",
                description: "You can move through the space of any creature that is of a size larger than yours."
            }
        ],
        armorClass: 14,
        initiative: 4,
        speed: 35
    }
];