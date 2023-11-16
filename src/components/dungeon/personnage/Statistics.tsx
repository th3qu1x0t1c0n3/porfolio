import {ICharactere} from "../../../assets/models/dungeon/character";

function Statistics() {
    const myCharactere: ICharactere = {
        id: "1",
        name: "John Doe",
        statistics: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            sagesse: 10,
            charisme: 10
        },
        race: "Human",
        player: "Player1",
        classe: "Warrior",
        sousclasses: "Subclass1",
        level: 1,
        background: "Background1",
        synopsis: "Synopsis1",
        owner: "Owner1",
        image: "Image1",
        health: 100,
        currentHealth: 100,
        traits: [{
            trait: "Trait1",
            description: "Description1",
        }],
        armorClass: 10,
        initiative: 10,
        speed: 30,
    };
    const statLookup = [
        // Pourquoi est-ce un mauvais choix???
        {prefix: 'str', suffix: 'ength', color: 'bg-danger'},
        {prefix: 'dex', suffix: 'terity', color: 'bg-primary'},
        {prefix: 'con', suffix: 'stitution', color: 'bg-warning'},
        {prefix: 'int', suffix: 'elligence', color: 'bg-success'},
        {prefix: 'sag', suffix: 'esse', color: 'bg-info'},
        {prefix: 'cha', suffix: 'risme', color: 'bg-dark'}
    ];

    function getModifier(stat: number): string {
        const mod = Math.floor((stat - 10) / 2)
        return (mod < 0) ? '-' : '+' + mod.toString();
    }

    return (
        <div className="col-xl-9 col-lg-8 col-md-8 mt-5 ms-auto fixed-top d-none d-md-inline"
             style={{marginTop: '500px'}}>
            <div className="row text-center text-light bg-secondary mt-2 bg-transparent">
                <div className="row mt-1"></div>
                {
                    statLookup.map((stat, index) => {
                        return (
                            <div className={`col-2 mt-4`} key={index}>
                                <div className={`${stat.color} mx-xxl-4 mx-3 mx-md-1 rounded-4`}>
                                    <div className="fw-bold">
                                        {stat.prefix}<span className="d-none d-lg-inline">{stat.suffix}</span>
                                    </div>
                                    <div className={"h2"}>
                                        {getModifier(myCharactere.statistics[stat.prefix + stat.suffix])}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Statistics;