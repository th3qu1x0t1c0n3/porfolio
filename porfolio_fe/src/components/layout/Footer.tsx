import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const {t} = useTranslation();

    return (
        <footer className="bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-white fw-light text-capitalize p-3">{t('footer.title')}</h1>
                        <h3 className="text-light fw-light fst-italic mb-3">{t('footer.desc')}</h3>
                        <div className="py-2">
                            <a target="_blank" rel="noreferrer" href="https://github.com/th3qu1x0t1c0n3" title={t('footer.personalGit')}>
                                <FontAwesomeIcon icon={faGithub}
                                                 className="text-white bg-dark fa-2x rounded rounded-5 mx-3"></FontAwesomeIcon>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/louisphilippe.forget.12">
                                <FontAwesomeIcon icon={faFacebook}
                                                 className="fab fa-facebook fa-2x text-primary bg-white rounded rounded-5 mx-3"></FontAwesomeIcon>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/2055619" title={t('footer.schoolGit')}>
                                <FontAwesomeIcon icon={faGithub}
                                                 className="text-white bg-dark fa-2x rounded rounded-5 mx-3"></FontAwesomeIcon>
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