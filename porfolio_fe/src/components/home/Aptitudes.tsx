import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDisplay, faPenToSquare, faTerminal} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";


function Aptitudes() {
    const {t} = useTranslation();

    return (
        <div className="container-fluid bg-white py-5">
            <div className="text-center">
                <h1 className="text-warning display-1">{t('pages.home.aptitudes')}</h1>
                <h4 className="text-secondary fw-light">{t('pages.home.aptitudesDesc')}</h4>

                <div className="row my-4">
                    <div className="col-lg-4 col-md-12 my-md-3">
                        <FontAwesomeIcon className="fa-solid fa-display fa-6x text-warning" icon={faDisplay}/>
                        <h1>{t('pages.home.developpement')}</h1>
                        <p>{t('pages.home.developpementDesc')}</p>
                    </div>

                    <div className="col-lg-4 col-md-12 my-md-3">
                        <FontAwesomeIcon className="fa-solid fa-display fa-6x text-warning" icon={faPenToSquare}/>
                        <h1>{t('pages.home.design')}</h1>
                        <p>{t('pages.home.designDesc')}</p>
                    </div>

                    <div className="col-lg-4 col-md-12 my-md-3">
                        <FontAwesomeIcon className="fa-solid fa-display fa-6x text-warning" icon={faTerminal}/>
                        <h1>{t('pages.home.commands')}</h1>
                        <p>{t('pages.home.commandsDesc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aptitudes;