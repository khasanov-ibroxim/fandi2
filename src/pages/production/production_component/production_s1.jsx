import React from 'react';
import {useTranslation} from "react-i18next";

const ProductionS1 = ({item}) => {
    const {t} = useTranslation();
    return (
        <div className={"main_container"}>
            <div className="production_s1">
                <h1>{item.title_name}</h1>
                <p>{t("production.bread_home")} / {t("production.bread_production")} / <span>{item.title_name}</span></p>
            </div>
        </div>
    );
};

export default ProductionS1;