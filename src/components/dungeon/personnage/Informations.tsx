import {ICharactere} from "../../../assets/models/dungeon/character";
import {useTranslation} from "react-i18next";

interface IInformations {
    character: ICharactere
}
function Informations({character}: IInformations) {
    const {t} = useTranslation();

    return (
        <div className="">
            <h3 className="text-white text-center mb-3 mt-4">Informations</h3>
            <div className="row m-1">
                <div className="col-6 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Race
                            </h5>
                            <p className="card-text">
                                {character.race}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Level & Class
                            </h5>
                            <p className="card-text">
                                {`${character.level}${t('pages.dungeon.reLevel')} ${character.classe} (${character.sousclasses})`}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Background
                            </h5>
                            <p className="card-text">
                                {character.background}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Synopsis
                            </h5>
                            <p className="card-text">
                                {character.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informations;