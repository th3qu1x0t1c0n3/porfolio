import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();
    const [lang, setLang] = React.useState('fr');

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang) {
            setLang(lang);
            i18n.changeLanguage(lang).then(r => r);
        }
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(r => r);
        setLang(lng)
        localStorage.setItem('lang', lng);
    };

    return (
        <div className="me-5 col-1">
            <select className={"form-select clickable"} defaultValue={lang} value={lang} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}

export default LanguageSelector;
