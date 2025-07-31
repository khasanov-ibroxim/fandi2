import React, {useEffect} from 'react';
import "./production.css"
import {useParams} from "react-router-dom";
import {Production_db} from "@/pages/production/production_db.jsx";
import Production_s1 from "@/pages/production/production_component/production_s1.jsx";
import Production_s2 from "@/pages/production/production_component/production_s2.jsx";
import Production_s3 from "@/pages/production/production_component/production_s3.jsx";
import {useTranslation} from "react-i18next";


const Production = () => {
    const {id} = useParams()
    const {t} = useTranslation()
    const item = Production_db(t).find(item => Number(item.id) === Number(id))
    if (!item) {
        return <div className="main_container"><h2>Ma'lumot topilmadi</h2></div>
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>
            <Production_s1 item={item}/>

            <div className="main_container">
                <div className="productions_box">
                    <Production_s2 item={item}/>
                    <Production_s3 item={item.tabs}/>
                </div>

            </div>
        </>
    );
};

export default Production;