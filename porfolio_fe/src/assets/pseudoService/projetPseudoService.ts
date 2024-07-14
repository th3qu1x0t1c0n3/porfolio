import {IProjet} from "../models/projet";
import prevArchitectCloud from "../Images/architectCloud.png";
import prevPortailJeux from "../Images/portailJeux.png";
import prevDungeon from "../Images/dungeon.png";
import prevGlucose from "../Images/glucose.png";
import {ICharactere} from "../models/dungeon/character";
import {ILogs} from "../models/dungeon/logs";
import xefoul from "../Images/xefoul.png";

export const mesProjets: IProjet[] = [
    {
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
    }, {
        titre: "projects.glucose.title",
        auteur: "Louis-Philippe Forget, Gabriel, Chouaki Bendamane, Samuel Gignac, Zakaria",
        image: prevGlucose,
        desc: "projects.glucose.description",
        lien: "https://glucose.quixotic.date/"
    }
]

export const preLogs: ILogs[] = [
    {
        date: "2014-05-12 02:12",
        message: "We met a bard at the taverne who talk of a quest that is requested by the mayor."
    },
    {
        date: "2014-05-12-05:23",
        message: "Pick a fight with Silvis who laugh about me wanting a rat as familiar.... he win"
    }
]

export const characs: ICharactere[] = [
    {
        id: "demochar1",
        name: "Tester test",
        statistics: {strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10},
        race: "Human",
        player: "Player 1",
        classe: "Warrior",
        sousclasses: "Berserker",
        level: 1,
        background: "Soldier",
        synopsis: "A brave warrior",
        owner: xefoul,
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
        id: "demochar",
        name: "Michel Michaud",
        statistics: {strength: 8, dexterity: 14, constitution: 12, intelligence: 14, wisdom: 10, charisma: 12},
        race: "Elf",
        player: "Player 2",
        classe: "Rogue",
        sousclasses: "Thief",
        level: 1,
        background: "Criminal",
        synopsis: "A cunning rogue",
        owner: "Player 2",
        image: xefoul,
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