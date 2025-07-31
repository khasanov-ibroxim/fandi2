import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "@/assets/home/home_s3/0B0A4585.jpg"
import "./products.css"
import { Autoplay } from "swiper/modules";
import { Products_db } from "@/pages/products/products_db.jsx";
import {useTranslation} from "react-i18next";

const Products = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ fixed
    const [activeCat , setActiveCat] = useState("all")
    const {t} = useTranslation();
    const imgChecker = (product, index) => {
        if (Array.isArray(product)) {
            return hoveredIndex === index ? product[1] : product[0];
        } else {
            return product;
        }
    };

    return (
        <div className="main_container">
            <div className="production_s1">
                <h1>{t("products.title")}</h1>
                <p>{t("products.home")}  / <span>{t("products.title")}</span></p>
            </div>

            <div className="products_content">
                <div className="products_tabs_box">
                    <div className={`product_tab_item ${activeCat === "all" && "active"}`} onClick={()=>setActiveCat("all")}>{t("products.all_products")}</div>
                    <div className={`product_tab_item ${activeCat === "women" && "active"}`}  onClick={()=>setActiveCat("women")}>{t("products.women")}</div>
                    <div className={`product_tab_item ${activeCat === "men" && "active"}`}  onClick={()=>setActiveCat("men")}>{t("products.men")}</div>
                </div>
                <div className="row">
                    {Products_db.filter(item => activeCat === "all" || item.cat_name === activeCat)
                        .map((item, index) => (
                            <div className="col-lg-4 col-6" key={index}
                                 onMouseEnter={() => setHoveredIndex(index)}
                                 onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="product_item">
                                    <img src={imgChecker(item.img_path, index)} alt="product" />
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </div>
    );
};

export default Products;
