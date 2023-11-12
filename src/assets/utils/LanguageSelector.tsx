import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="me-5">
            <select className={"form-select clickable"} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </div>
    );
}

export default LanguageSelector;
