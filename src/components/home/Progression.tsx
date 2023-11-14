import {useTranslation} from "react-i18next";

function Progression(){
    const { t } = useTranslation();

    return(
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
                            <div className="progress-bar" style={{width: '95%'}}>
                                95%
                            </div>
                        </div>
                        <h2>SQL</h2>
                        <div className="progress bg-secondary mb-3">
                            <div className="progress-bar bg-danger" style={{width: '50%'}}>
                                50%
                            </div>
                        </div>
                        <h2>ANGULAR</h2>
                        <div className="progress bg-secondary mb-3">
                            <div className="progress-bar bg-warning" style={{width: '90%'}}>
                                90%
                            </div>
                        </div>
                        <h2>React</h2>
                        <div className="progress bg-secondary mb-3">
                            <div className="progress-bar bg-warning" style={{width: '90%'}}>
                                90%
                            </div>
                        </div>
                        <h2>C++</h2>
                        <div className="progress bg-secondary mb-3">
                            <div className="progress-bar bg-success" style={{width: '10%'}}>
                                10%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Progression;