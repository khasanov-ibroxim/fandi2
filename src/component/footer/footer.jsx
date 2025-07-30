import React from 'react';
import "./footer.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Link} from "react-router-dom"
import {ABOUT, CONTACT, HOME, PRODUCTION, PRODUCTS} from "@/utils/constes.jsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className={"main_container"}>
            <div className="footer_box">
                <div className="footer_element" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <ArrowOutwardIcon/>
                </div>

                <div className="footer_title">{t("footer.title")}</div>
                <div className="footer_content">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-md-6 col-lg-4 mb-4">
                            <div className="subtitle_box">
                                <span style={{background: "white"}}></span>
                                <h2 style={{color: "white"}}>{t("footer.contact")}</h2>
                            </div>
                            <div className="footer_item_1_box d-flex flex-column flex-md-row g-4 mt-3">
                                <div className="footer_item_1 me-md-5 mb-3 mb-md-0">
                                    <h1>{t("footer.region")}</h1>
                                    <p>{t("footer.address")}</p>
                                    <a href={"#"} >+998 33 700 40 00</a>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <div className="subtitle_box">
                                <span style={{background: "white"}}></span>
                                <h2 style={{color: "white"}}>{t("footer.menu")}</h2>
                            </div>
                            <div className="footer_item_2_box d-flex justify-content-between mt-3">
                                <ul className="p-0 m-0">
                                    <li><Link to={HOME} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.home")}</Link></li>
                                    <li><Link to={ABOUT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.about")}</Link></li>
                                    <li><Link to={PRODUCTS} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.products")}</Link></li>
                                    <li><Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.contact")}</Link></li>
                                </ul>
                                <ul className="p-0 m-0">
                                    <li><Link to={PRODUCTION.replace(":id" , 1)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.production_list.zakroy")}</Link></li>
                                    <li><Link to={PRODUCTION.replace(":id" , 2)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.production_list.shvey")}</Link></li>
                                    <li><Link to={PRODUCTION.replace(":id" , 3)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.production_list.kantrol")}</Link></li>
                                    <li><Link to={PRODUCTION.replace(":id" , 4)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("navbar.production_list.gladil")}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column align-items-center ">
                            <div className="subtitle_box">
                                <span style={{background: "white"}}></span>
                                <h2 style={{color: "white"}}>{t("footer.contact")}</h2>
                            </div>
                            <div className="footer_item_3_box mt-3">
                                <a href={"tel:+998337004000"} className={"tell"}>+998337004000</a>
                                <a href={"tel:+998935718328"} className={"tell"}>+998935718328</a>
                                <Link to="mailto:marketing@fanditeks.uz">marketing@fanditeks.uz </Link>
                                <Link to="mailto:fanditeks@hotmail.com">fanditeks@hotmail.com </Link>
                            </div>
                            <div className="footer_item_4_box justify-content-center">
                                <a href="#"><InstagramIcon/></a>
                                <a href="https://t.me/fanditeks"><TelegramIcon/></a>
                                <a href="#"><FacebookIcon/></a>
                                <a href="https://wa.me/+998935718328"><WhatsAppIcon/></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;