import React from 'react';
import "./home_s6.css"
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "@/assets/home/home_s6/blog1-630x430.jpg"
import img2 from "@/assets/home/home_s6/blog2-630x430.jpg"
import img3 from "@/assets/home/home_s6/blog3-630x430.jpg"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {Link} from "react-router-dom"
import {Autoplay} from "swiper/modules";
import {useTranslation} from "react-i18next";

const HomeS6 = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_s6 container-fluid"}>
            <div className="home_s6_title">
                <div className="subtitle_box">
                    <span></span>
                    <h2>{t("home.home_s6.subtitle")}</h2>
                </div>
                <h1>{t("home.home_s6.title")}</h1>
            </div>


            <div className="home_s6_swiper_box">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{delay:3000}}
                    modules={[Autoplay]}
                    className={"home_s6_swiper"}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="home_s6_item">
                            <div className="home_s6_item_top">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="home_s6_item_body">
                                <h1>Textilegence Magazine & Digital Platform</h1>
                                <p>This article surveys the development of textiles and the history and development of
                                    the
                                    textile industry. It treats in s...</p>
                            </div>
                            <div className="home_s6_item_footer">
                                    <div className="home_s6_item_footer_left">
                                        <Link to={"#"}>Event</Link>
                                       <p>25 May , 2025</p>
                                    </div>
                                <div className="home_s6_item_footer_right">
                                    <ArrowForwardIcon/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s6_item">
                            <div className="home_s6_item_top">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="home_s6_item_body">
                                <h1>Textilegence Magazine & Digital Platform</h1>
                                <p>This article surveys the development of textiles and the history and development of
                                    the
                                    textile industry. It treats in s...</p>
                            </div>
                            <div className="home_s6_item_footer">
                                    <div className="home_s6_item_footer_left">
                                        <Link to={"#"}>Event</Link>
                                       <p>25 May , 2025</p>
                                    </div>
                                <div className="home_s6_item_footer_right">
                                    <ArrowForwardIcon/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home_s6_item">
                            <div className="home_s6_item_top">
                                <img src={img3} alt=""/>
                            </div>
                            <div className="home_s6_item_body">
                                <h1>Textilegence Magazine & Digital Platform</h1>
                                <p>This article surveys the development of textiles and the history and development of
                                    the
                                    textile industry. It treats in s...</p>
                            </div>
                            <div className="home_s6_item_footer">
                                    <div className="home_s6_item_footer_left">
                                        <Link to={"#"}>Event</Link>
                                       <p>25 May , 2025</p>
                                    </div>
                                <div className="home_s6_item_footer_right">
                                    <ArrowForwardIcon/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default HomeS6;