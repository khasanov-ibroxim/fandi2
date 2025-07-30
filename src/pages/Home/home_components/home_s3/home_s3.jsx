import React from 'react';
import "./home_s3.css"
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img_1 from "@/assets/home/home_s3/0B0A4585.jpg"
import img_2 from "@/assets/home/home_s3/0B0A4600.jpg"
import img_3 from "@/assets/home/home_s3/0B0A4666.jpg"
import img_4 from "@/assets/home/home_s3/0B0A4754.jpg"
import {Autoplay} from "swiper/modules";

import {Link} from "react-router-dom"
import {PRODUCTION} from "@/utils/constes.jsx";
import {useTranslation} from "react-i18next";

const HomeS3 = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_s3"}>
            <div className="home_s3_center_line"></div>
            <div className="container-fluid">
                <div className="home_s3_box_title" data-aos="fade-right">
                    <div className="subtitle_box">
                        <span></span>
                        <h2>{t("home.home_s3.subtitle")}</h2>
                    </div>
                    <div className="home_s3_title">
                        <h1>{t("home.home_s3.title")}</h1>
                        <p>{t("home.home_s3.title_bottom")}</p>
                    </div>
                </div>

                <div className="home_s3_box_content">
                    <Swiper loop={true} modules={[Autoplay]} autoplay={{delay: 3000}} className={"home_s3_swiper"}>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 1)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>{t("home.home_s3.item_1.h1")}</h1>
                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>{t("home.home_s3.item_1.p")}</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom"  style={{background:`url(${img_4}) bottom no-repeat`, backgroundSize:"cover"}}>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 2)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>{t("home.home_s3.item_2.h1")}</h1>

                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>{t("home.home_s3.item_2.p")}</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom"  style={{background:`url(${img_1}) bottom no-repeat`, backgroundSize:"cover"}}>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 3)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>{t("home.home_s3.item_3.h1")}</h1>

                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>{t("home.home_s3.item_3.p")}</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom"  style={{background:`url(${img_3}) bottom no-repeat`, backgroundSize:"cover"}}>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home_s3_box_content_item">
                                <Link to={PRODUCTION.replace(":id" , 4)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="h_s3_top">
                                    <div className="h_s3_top_left">
                                        <h1>{t("home.home_s3.item_4.h1")}</h1>

                                    </div>
                                    <div className="h_s3_top_right">
                                        <p>{t("home.home_s3.item_4.p")}</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </Link>
                                <div className="h_s3_bottom" style={{background:`url(${img_2}) bottom no-repeat`, backgroundSize:"cover"}}>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomeS3;