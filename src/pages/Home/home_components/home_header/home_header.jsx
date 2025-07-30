import React from 'react';
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import header_element from "@/assets/home/home_header/016A3172.jpg"
import "./home_header.css"
import {useTranslation} from "react-i18next";

const HomeHeader = () => {
    const {t} = useTranslation();

    return (
        <div className={"home_header"}>
            <div className="row ">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="h-header_left">
                        <h1 dangerouslySetInnerHTML={{__html:t("home.home_header.left.h1")}}></h1>
                        <p>{t("home.home_header.left.p1")}</p>
                        <p>{t("home.home_header.left.p2")}</p>
                        <Link to={"#"}>{t("home.home_header.left.btn")} <ArrowForwardIcon/></Link>
                    </div>
                </div>
                <div className="home_header_element" data-aos="fade-up">
                    <img src={header_element} alt="header_element"/>
                </div>
                <div className="col-lg-6 d-flex  justify-content-end" data-aos="fade-left">
                    <div className="h-header_right">

                        <p>{t("home.home_header.right.p")}</p>
                        <div className="h-header_right_box">
                            <div className="h-header_right_box_item">
                                <h2>1+</h2>
                                <p>{t("home.home_header.right.p1")}</p>
                            </div>
                            <div className="h-header_right_box_item">
                                <h2>30+</h2>
                                <p>{t("home.home_header.right.p2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;