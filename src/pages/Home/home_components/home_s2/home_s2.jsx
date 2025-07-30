import React from 'react';
import "./home_s2.css"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";
const HomeS2 = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_s2"} data-aos="fade-up">
            <div className="container-fluid">
                <div className="subtitle_box justify-content-center">
                    <span></span>
                    <h2 style={{color: "white"}}>{t('home.home_s2.subtitle')}</h2>
                </div>
                <div className="home_s2_title text-center ">
                    <h1 dangerouslySetInnerHTML={{__html:t('home.home_s2.title')}}></h1>
                </div>
                <div className="home_s2_content">
                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>{t('home.home_s2.item_top')}</span>
                            <Link to={"#"}>{t('home.home_s2.item_1.left')}</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>{t('home.home_s2.item_1.right')}</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>


                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>{t('home.home_s2.item_top')}</span>
                            <Link to={"#"}>{t('home.home_s2.item_2.left')}</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>{t('home.home_s2.item_2.right')}</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>

                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>{t('home.home_s2.item_top')}</span>
                            <Link to={"#"}>{t('home.home_s2.item_3.left')}</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>{t('home.home_s2.item_3.right')}</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>

                    <div className="home_s2_item">
                        <div className="home_s2_opacity"></div>
                        <div className="home_s2_item_left">
                            <span>{t('home.home_s2.item_top')}</span>
                            <Link to={"#"}>{t('home.home_s2.item_4.left')}</Link>


                        </div>
                        <div className="home_s2_item_right">
                            <p>{t('home.home_s2.item_4.right')}</p>
                            <div className="home_s2_item_right_icon"><ArrowForwardIcon fontSize={'large'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS2;