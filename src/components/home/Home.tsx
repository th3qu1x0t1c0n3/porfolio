import {useNavigate} from "react-router-dom";
import {mesProjets} from "../../assets/pseudoService/projetPseudoService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
import { faTerminal} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import Contact from "./Contact";

function Home () {
    const navigate = useNavigate();
    const {t} = useTranslation()

    return(
        <div>
            <div id="home" className="bg-primary container-fluid">
                <div className="row align-items-center vh-100 text-center">
                    <div className="mb-5">
                        <h1 className="text-warning display-1 text-capitalize">{t('pages.home.title')}</h1>
                        <h2 className="text-light fst-italic fw-light p-5">{t('pages.home.description')}</h2>
                    </div>
                </div>
            </div>

            <section id="intro" className="p-5 bg-secondary">
                <div className="text-center">
                    <h1 className="text-warning display-1">{t('pages.home.intro')}</h1>
                    <h4 className="">{t('pages.home.me')}</h4>
                    <p className="">{t('pages.home.desc')}</p>
                </div>
            </section>

            <div className="container-fluid bg-light py-5">
                <div className="text-center">
                    <h1 className="text-warning display-1">{t('pages.home.aptitudes')}</h1>
                    <h4 className="text-secondary fw-light">{t('pages.home.aptitudesDesc')}</h4>

                    <div className="row my-4">
                        <div className="col-lg-4 col-md-12 my-md-3">
                            <FontAwesomeIcon  className="fa-solid fa-display fa-6x text-warning" icon={faDisplay} />
                            <h1>{t('pages.home.developpement')}</h1>
                            <p>{t('pages.home.developpementDesc')}</p>
                        </div>

                        <div className="col-lg-4 col-md-12 my-md-3">
                            <FontAwesomeIcon  className="fa-solid fa-display fa-6x text-warning" icon={faPenToSquare} />
                            <h1>{t('pages.home.design')}</h1>
                            <p>{t('pages.home.designDesc')}</p>
                        </div>

                        <div className="col-lg-4 col-md-12 my-md-3">
                            <FontAwesomeIcon  className="fa-solid fa-display fa-6x text-warning" icon={faTerminal} />
                            <h1>{t('pages.home.commands')}</h1>
                            <p>{t('pages.home.commandsDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="projet" className="text-center container-fluid pt-5 mt-4">
                <h1 className="display-1 text-warning">{t('pages.home.projects')}</h1>
                <p className="lead">{t('pages.home.projectSecond')}</p>
                <p className="lead">{t('pages.home.projectsDesc')}</p>
            </div>

            <div className="row mx-5 pb-5 justify-content-center">
                {mesProjets.map((projet, index) => (
                    <div key={index} className="card col-lg-3 col-md-6 p-0 mx-xlg-5 mx-lg-5 mx-sm-1 my-3">
                        <img src={projet.image} className="card-img-top" alt="x" />
                        <div className="card-body">
                            <h1 className="text-warning my-4">{t(projet.titre)}</h1>
                            <p className="text-secondary">{t(projet.desc)}</p>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-outline-dark m-2 mt-0" onClick={() => navigate(projet.lien)}>{t('pages.home.goToProjects')}</button>
                        </div>
                    </div>
                ))}
            </div>

            <section id="progres" className="p-5 bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center mb-3">
                            <h1 className="text-warning display-2">{t('pages.home.progress')}</h1>
                            <p className="lead text-secondary">{t('pages.home.progressDesc')}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-10 text-secondary">
                            <h2>JAVA</h2>
                            <div className="progress bg-secondary mb-3">
                                <div className="progress-bar" style={{ width: '95%' }}>
                                    95%
                                </div>
                            </div>
                            <h2>SQL</h2>
                            <div className="progress bg-secondary mb-3">
                                <div className="progress-bar bg-danger" style={{ width: '50%' }}>
                                    50%
                                </div>
                            </div>
                            <h2>ANGULAR</h2>
                            <div className="progress bg-secondary mb-3">
                                <div className="progress-bar bg-warning" style={{ width: '90%' }}>
                                    90%
                                </div>
                            </div>
                            <h2>React</h2>
                            <div className="progress bg-secondary mb-3">
                                <div className="progress-bar bg-warning" style={{ width: '90%' }}>
                                    90%
                                </div>
                            </div>
                            <h2>C++</h2>
                            <div className="progress bg-secondary mb-3">
                                <div className="progress-bar bg-success" style={{ width: '10%' }}>
                                    10%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className=" bg-light pb-5">
                <div className="container-fluid">
                    <Contact />
                </div>
            </section>
        </div>
    );
}

export default Home;