import React from 'react';
import "./home_s4.css"
import bgImg from "@/assets/home/home_s4/ctaimg.png"
import {Link} from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useTranslation} from "react-i18next";

const HomeS4 = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_s4 container-fluid"}>
            <div className="home_s4_box" >
                <div className="home_s4_left">
                    <h1 dangerouslySetInnerHTML={{__html:t('home.home_s4.h1')}}></h1>
                    <div className="home_s4_contact_box">
                        <a href="tel:+998337004000">+998337004000</a>
                        <a href="mailto:marketing@fanditeks.uz">marketing@fanditeks.uz </a>
                        <a href="mailto:fanditeks@hotmail.com">fanditeks@hotmail.com</a>
                    </div>
                </div>
                <div className="home_s4_right">
                    <p>{t("home.home_s4.p")}</p>
                    <Link to={"#"} style={{textAlign:"center"}}>{t("home.home_s4.a")}<ArrowForwardIcon/></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeS4;