import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-white fw-light text-capitalize p-3">{t('footer.title')}</h1>
                        <h3 className="text-light fw-light fst-italic mb-3">{t('footer.desc')}</h3>
                        <div className="py-2">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/louisphilippe.forget.12">
                                <FontAwesomeIcon icon={['fab', 'facebook']} className="fab fa-facebook fa-2x text-info mx-3"></FontAwesomeIcon>
                            </a>
                        </div>
                        <p className="text-light py-4 m-0">{t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;