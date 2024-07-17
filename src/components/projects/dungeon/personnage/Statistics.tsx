import {ICharactere} from "../../../../assets/models/dungeon/character";

function Statistics({character}: {character: ICharactere}) {
    const statLookup = [
        // Pourquoi est-ce un mauvais choix???
        {prefix: 'str', suffix: 'ength', color: 'bg-danger'},
        {prefix: 'dex', suffix: 'terity', color: 'bg-primary'},
        {prefix: 'con', suffix: 'stitution', color: 'bg-warning'},
        {prefix: 'int', suffix: 'elligence', color: 'bg-success'},
        {prefix: 'wis', suffix: 'dom', color: 'bg-info'},
        {prefix: 'cha', suffix: 'risma', color: 'bg-dark'}
    ];

    function getModifier(stat: number): string {
        const mod = Math.floor((stat - 10) / 2)
        return (mod < 0) ? mod.toString() : '+' + mod.toString();
    }

    return (
        <div className="col-xl-9 col-lg-8 col-md-8 ms-auto d-none d-md-inline"
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
                                        {getModifier(character.statistics[stat.prefix + stat.suffix])}
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