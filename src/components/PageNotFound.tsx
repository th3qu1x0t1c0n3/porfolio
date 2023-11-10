import {useTranslation} from "react-i18next";

function PageNotFound() {
    const {t} = useTranslation()

    return (
        <>
            <h1>{t('utils.pageNotFound')}</h1>
        </>
    );
}

export default PageNotFound;