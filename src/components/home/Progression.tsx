import {useTranslation} from "react-i18next";

function Progression(){
    const { t } = useTranslation();
    const progress = [
        {name: 'JAVA', value: 95},
        {name: 'SQL', value: 50},
        {name: 'ANGULAR', value: 90},
        {name: 'React', value: 90},
        {name: 'C++', value: 10},
    ];

    function getColor(pct: number) {
        if(pct <= 30) return 'bg-danger';
        if(pct <= 50) return 'bg-warning';
        if(pct <= 80) return 'bg-success';
        if(pct <= 90) return 'bg-info';
        if(pct <= 100) return 'bg-primary';

        return 'bg-light';
    }

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
                        {
                            progress.map((item, index) => (
                                <div key={index}>
                                    <h2>{item.name}</h2>
                                    <div className={`progress mb-3 bg-secondary`}>
                                        <div className={`progress-bar ${getColor(item.value)}`} style={{width: item.value + '%'}}>
                                            {item.value}%
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Progression;