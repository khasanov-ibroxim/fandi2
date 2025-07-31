import React, {useState} from 'react';
import "./about_s2.css";
import img_1 from "@/assets/about/about_s2/tkan.png"
import img_2 from "@/assets/about/about_s2/izdeliya.png"
import img_3 from "@/assets/about/about_s2/siryo.png"
import img_4 from "@/assets/about/about_s2/volokna.png"
import bgImg from "@/assets/about/about_s2/016A3192.JPG";
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {CONTACT} from "@/utils/constes.jsx";
import {useTranslation} from "react-i18next";


const AboutS2 = () => {
    const [activeContent, setActiveContent] = useState(1);
    const {t} = useTranslation();
    const items = [
        {
            id: 1,
            icon: img_2,
            title: t("about.about_s2.i1.title"),
            text: t("about.about_s2.i1.text")
        },
        {
            id: 2,
            icon: img_1,
            title: t("about.about_s2.i2.title"),
            text: t("about.about_s2.i2.text")
        },

        {
            id: 3,
            icon: img_3,
            title: t("about.about_s2.i3.title"),
            text: t("about.about_s2.i3.text")
        },
        {
            id: 4,
            icon: img_4,
            title: t("about.about_s2.i4.title"),
            text: t("about.about_s2.i1.text")
        }
    ];

    const activeItem = items.find(item => item.id === activeContent);

    return (
        <div className="a2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="a2_left">
                            <div className="a2_left_title">
                                <h2>{t("about.about_s2.title")}</h2>
                                <p>{t("about.about_s2.title_desc")}</p>
                            </div>
                            <div className="a2_left_content">
                                <div className="a2_left_group_btn">
                                    {items.map(item => (
                                        <div
                                            key={item.id}
                                            className={`a2_left_item ${activeContent === item.id ? "active" : ""}`}
                                            onClick={() => setActiveContent(item.id)}
                                            dangerouslySetInnerHTML={{__html: item.title}}
                                        >

                                        </div>
                                    ))}
                                </div>
                                <div className="a2_left_item_content">
                                    <img src={activeItem?.icon} alt="FANDI"/>
                                    <p>{activeItem?.text}</p>
                                    <Link to={CONTACT}>{t("about.about_s2.btn")} <ArrowForwardIcon/></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="a2_right">
                            <img src={bgImg} alt="" className={"home_s1_img"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS2;
