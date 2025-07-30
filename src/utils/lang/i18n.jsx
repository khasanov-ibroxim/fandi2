import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {home_translate as product_translate, home_translate} from "@/utils/lang/translates/home_translate.jsx";
import {about_translate} from "@/utils/lang/translates/about_translate.jsx";
import {contact_translate} from "@/utils/lang/translates/contact_translate.jsx";
import {products_translate} from "@/utils/lang/translates/products_translate.jsx";
import {production_translate} from "@/utils/lang/translates/production_translate.jsx";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: {
                translation: {
                    home: home_translate.ru,
                    about: about_translate.ru,
                    contact: contact_translate.ru,
                    products: products_translate.ru,
                    production: production_translate.ru,
                    navbar: {
                        home: "Главная",
                        about: "О нас",
                        contact: "Контакты",
                        production:"Производство",
                        production_list:{
                            zakroy:"Закройный цех",
                            shvey:"Швейный цех",
                            kantrol:"Контроль качества",
                            gladil:"Гладильно-упаковочный цех"
                        },
                        products:"Продукция",
                        btn:"Связаться"
                    },
                    footer:{
                        title:"Держим связь всегда",
                        contact:"Контакты",
                        region:"Узбекистан",
                        address:`110907 , Узбекистан, Ташкентская область, Куйичирчикский район , населенный пункт Беруний , ул. Файзобод , д.340`,
                        menu:"Меню"
                    }
                }
            },
            en: {
                translation: {
                    home: home_translate.en,
                    about: about_translate.en,
                    contact: contact_translate.en,
                    products: products_translate.en,
                    production: production_translate.en,
                    navbar: {
                        home: "Home",
                        about: "About",
                        contact: "Contact us",
                        production:"Production",
                        production_list:{
                            zakroy:"Cutting Department",
                            shvey:"Sewing Department",
                            kantrol:"Quality Control",
                            gladil:"Packaging Department"
                        },
                        products:"Products",
                        btn:"Get in Touch"
                    },
                    footer:{
                        title:"Always in Touch",
                        contact:"Contacts",
                        region:"Uzbekistan",
                        address:`110907, Uzbekistan, Tashkent Region, Kuyichirchik District, Beruniy settlement, Fayzobod Street, Building 340`,
                        menu:"Menu"
                    }
                }
            },
        },
    });

export default i18n;
