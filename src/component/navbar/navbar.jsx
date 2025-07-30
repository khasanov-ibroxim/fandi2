import React, {useEffect, useState} from 'react';
import "./navbar.css"
import logo from "./logo.png"
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {ABOUT, CONTACT, HOME, PRODUCTION, PRODUCTS} from "@/utils/constes.jsx";
import {useLanguage} from "@/utils/lang/LangContext.jsx";
import {useTranslation} from "react-i18next";
import {languages} from "@/utils/lang/langs.jsx";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const currentLangCode = selectedLanguage?.code || 'ru';
    console.log(selectedLanguage);

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={"main_container"} style={{overflow:"inherit"}}>
            <div className="navbar">
                <div className="nav_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to={HOME}>{t("navbar.home")}</Link></li>
                        <li><Link to={ABOUT}>{t("navbar.about")}</Link></li>
                        <li className="production_link" onClick={() => setSubmenuOpen(!submenuOpen)}>
                            <span>{t("navbar.production")}</span>
                            <ol className={`production_submenu ${submenuOpen ? 'open' : ''}`}>
                                <li><Link to={PRODUCTION.replace(":id", 1)}>{t("navbar.production_list.zakroy")}</Link></li>
                                <li><Link to={PRODUCTION.replace(":id", 2)}>{t("navbar.production_list.shvey")}</Link></li>
                                <li><Link to={PRODUCTION.replace(":id", 3)}>{t("navbar.production_list.kantrol")}</Link></li>
                                <li><Link to={PRODUCTION.replace(":id", 4)}>{t("navbar.production_list.gladil")}</Link></li>
                            </ol>
                        </li>

                        <li><Link to={PRODUCTS}>{t("navbar.products")}</Link></li>
                        <li><Link to={CONTACT}>{t("navbar.contact")}</Link></li>
                        <li
                            className="production_link"
                            onClick={() => setLangOpen(!langOpen)}
                        >
                            <span>{currentLangCode === 'ru' ? 'Русский' : 'English'}</span>
                            <ol className={`production_submenu ${langOpen ? 'open' : ''}`}>
                                {languages.map((lang) => (
                                    <li  key={lang.key}
                                         onClick={() => handleLanguageChange({ key: lang.key })}>
                                        <span>{lang.label}</span>
                                    </li>
                                ))}
                            </ol>
                        </li>

                    </ul>
                </div>
                <div className="nav_btn">
                    {isMobile ? <div className="navburger" onClick={toggleMenu}>
                            {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
                        </div> :
                        <button>{t("navbar.btn")} <ArrowForwardIcon/></button>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;