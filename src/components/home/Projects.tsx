import {mesProjets} from "../../assets/pseudoService/projetPseudoService";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


function Projects() {
    const {t} = useTranslation()
    const navigate = useNavigate();

    function handleNavigate(lien: string) {
        if (lien.charAt(0) === '/') {
            return () => navigate(lien)
        } else {
            return () => window.open(lien, "_blank");
        }
    }

    return (
        <>
            <div id="projet" className="text-center container-fluid pt-5 mt-4">
                <h1 className="display-1 text-warning">{t('pages.home.projects')}</h1>
                <p className="lead">{t('pages.home.projectSecond')}</p>
                <p className="lead">{t('pages.home.projectsDesc')}</p>
            </div>

            <div className="row mx-5 pb-5 justify-content-center">
                {mesProjets.map((projet, index) => (
                    <div key={index} className="card col-lg-3 col-md-6 p-0 mx-xlg-5 mx-lg-5 mx-sm-1 my-3">
                        <img src={projet.image} className="card-img-top" alt="x"/>
                        <div className="card-body">
                            <h1 className="text-warning my-4">{t(projet.titre)}</h1>
                            <p className="text-secondary">{t(projet.desc)}</p>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-outline-dark m-2 mt-0"
                               onClick={handleNavigate(projet.lien)}>{t('pages.home.goToProjects')}</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Projects;

// target={projet.lien.charAt(0) === '/' ? "_top" : "_blank"}