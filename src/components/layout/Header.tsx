import LanguageSelector from "../../assets/utils/LanguageSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChild} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


function Header() {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <div className="sticky-top">
            <div className="bg-secondary">
                <nav className="navbar navbar-expand-md bg-dark text-uppercase fw-bold px-3 text-light navbar-dark sticky-top">
                    <a className="navbar-brand" href="/portfolio#home">
                        <FontAwesomeIcon icon={faChild} className="text-warning fa-2x" />
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler bg-warning"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link px-3 active" href="/portfolio#home" onClick={() => navigate('/portfolio#home')}>
                                    {t('header.home')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 active" href="/portfolio#intro" onClick={() => navigate('/portfolio#intro')}>
                                    {t('header.intro')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 active" href="/portfolio#projet" onClick={() => navigate('/portfolio#projet')}>
                                    {t('header.project')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 active" href="/portfolio#progres" onClick={() => navigate('/portfolio#progres')}>
                                    {t('header.progress')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 active" href="/portfolio#contact" onClick={() => navigate('/portfolio#contact')}>
                                    {t('header.contact')}
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* TODO: mettre que la personne est connecté */}
                    {/*<ul className="navbar-nav">*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <a className="nav-link active" href="/login">*/}
                    {/*            EDIT: Login*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <LanguageSelector />
                </nav>
            </div>
        </div>
    );
}

export default Header;