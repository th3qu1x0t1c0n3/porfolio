import {ICharactere} from "../../assets/models/dungeon/character";
import {useTranslation} from "react-i18next";


function BottomBar({character}: { character: ICharactere }){
    const {t} = useTranslation();
    return(
        <div>
            <div className="row bg-dark text-white fst-small py-2 heading-1 d-md-none">
                <div className="col-3 mx-auto">
                    {`${t('pages.dungeon.armor')} ${character.armorClass}`}
                </div>
                <div className="col-3 mx-auto">
                    {`${t('pages.dungeon.initiative')} ${character.initiative}`}
                </div>
                <div className="col-3 mx-auto">
                    {`${t('pages.dungeon.speed')} ${character.speed}`}
                </div>
                <div className="col-1 ms-auto">
                    <span className="d-inline d-sm-none">XS</span>
                    <span className="d-none d-sm-inline d-md-none">SM</span>
                    <span className="d-none d-md-inline d-lg-none ">MD</span>
                    <span className="d-none d-lg-inline d-xl-none ">LG</span>
                    <span className="d-none d-xl-inline d-xxl-none">XL</span>
                    <span className="d-none d-xxl-inline">XXL</span>
                </div>
            </div>

            <div className="d-none d-md-inline">
                <div className="row fixed-bottom bg-dark text-white fst-small py-2 heading-1">
                    <div className="col-3 mx-auto">
                        {`${t('pages.dungeon.armor')} ${character.armorClass}`}
                    </div>
                    <div className="col-3 mx-auto">
                        {`${t('pages.dungeon.initiative')} ${character.initiative}`}
                    </div>
                    <div className="col-3 mx-auto">
                        {`${t('pages.dungeon.speed')} ${character.speed}`}
                    </div>
                    <div className="col-1 ms-auto">
                        <span className="d-inline d-sm-none">XS</span>
                        <span className="d-none d-sm-inline d-md-none">SM</span>
                        <span className="d-none d-md-inline d-lg-none ">MD</span>
                        <span className="d-none d-lg-inline d-xl-none ">LG</span>
                        <span className="d-none d-xl-inline d-xxl-none">XL</span>
                        <span className="d-none d-xxl-inline">XXL</span>
                    </div>
                </div>
                <div className="row mt-md-4 my-sm-5"></div>
            </div>
        </div>
    );
}

export default BottomBar;