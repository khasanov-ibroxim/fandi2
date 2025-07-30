import React from 'react';
import "./home_s1.css"
import mashinka_icon from "@/assets/home/home_s1/mashinka_icon.svg"
import material_detal_icon from "@/assets/home/home_s1/material_detal_icon.svg"
import material_icon from "@/assets/home/home_s1/material_icon.svg"
import stanok_icon from "@/assets/home/home_s1/stanok_icon.svg"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from "react-router-dom"


import bgImg from '@/assets/home/home_s1/016A3238.JPG';
import {useTranslation} from "react-i18next";



const HomeS1 = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_s1 d-flex justify-content-center align-items-center"} style={{padding:"100px 0"}}>
            <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                    <div className="home_s1_text">
                        <div className="subtitle_box">
                            <span></span>
                            <h2>{t("home.home_s1.subtitle")}</h2>
                        </div>
                        <h1>{t("home.home_s1.h1")}</h1>
                        <p>{t("home.home_s1.p")}</p>
                        <div className="home_s1_box">
                            <div className="home_s1_box_item">
                                <img src={mashinka_icon} alt=""/>
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_s1.h3_1")}}></h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={material_icon} alt=""/>
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_s1.h3_2")}}></h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={material_detal_icon} alt=""/>
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_s1.h3_3")}}></h3>
                            </div>
                            <div className="home_s1_box_item">
                                <img src={stanok_icon} alt=""/>
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_s1.h3_4")}}></h3>
                            </div>
                        </div>
                        <div className="home_s1_contact_box">
                            <Link to={"#"} className={"home_s1_contact_box_btn"}> {t("home.home_s1.link")} <ArrowForwardIcon/></Link>
                            <div className="home_s1_contact_box_item">
                                <p>{t("home.home_s1.tel")}</p>
                                <div style={{
                                    display:"flex",
                                    gap:"10px",
                                    flexWrap:"wrap"
                                }}>
                                    <a href="tel:+998337004000">+998337004000</a>
                                    <a href="tel:+998935718328">+998935718328</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <img src={bgImg} alt="" className={"home_s1_img"}/>
                </div>
            </div>
        </div>
    );
};

export default HomeS1;