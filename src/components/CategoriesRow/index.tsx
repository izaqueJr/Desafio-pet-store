import React from "react";

import './global.css'
import bannerCategory1 from "../../assets/banner-category-1.png";
import bannerCategory2 from "../../assets/banner-category-2.png";
import bannerCategory3 from "../../assets/banner-category-3.png";



export default function CategoriesRow() {
    
    return(
        <section className="categories-row">
            <div className="categories-container"> 
                <a href="">
                    <img src={bannerCategory1} alt="rações" />
                </a>
                <a href="">
                    <img src={bannerCategory2} alt="brinquedos" />
                </a>
                <a href="">
                    <img src={bannerCategory3} alt="acessórios" />
                </a>
            </div>
        </section>
    )
}