import {useTranslation} from "react-i18next";
import Contact from "./Contact";
import Progression from "./Progression";
import Aptitudes from "./Aptitudes";
import Projects from "./Projects";

function Portfolio() {
    const {t} = useTranslation()

    return (
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
                    <h4>{t('pages.home.me')}</h4>
                    <div className={`container`}>
                        <p>{t('pages.home.desc')}</p>
                    </div>
                </div>
            </section>

            <Aptitudes/>

            <Projects/>

            <Progression/>

            <Contact/>
        </div>
    );
}

export default Portfolio;