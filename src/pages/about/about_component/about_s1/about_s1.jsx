import React from 'react';
import "./about_s1.css"
import img_1 from "@/assets/about/about_s1/016A3130.JPG"
import img_2 from "@/assets/about/about_s1/0B0A4828.JPG"
import {useTranslation} from "react-i18next";


const AboutS1 = () => {
    const {t} = useTranslation();

    return (
        <div className={"a1"}>
            <div className="container">
                <div className="row gap-2">
                    <div className="col-lg-6">
                        <div className="a1_left">
                            <img src={img_1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="a1_right">
                            <img src={img_2} alt=""/>
                            <div className="a1_right_text">
                                <h1>{t("about.about_s1.h1")}</h1>
                                <p>{t("about.about_s1.p")}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS1;