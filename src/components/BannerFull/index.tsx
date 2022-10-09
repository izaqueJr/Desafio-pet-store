import React from "react";
import './global.css'

interface BannerProps {
    mobile: string;
    desktop: string;
    alt?: string;
}

export default function BannerFull({ mobile, desktop, alt }: BannerProps) {

    return (
        <section className="banner-container">
            <img src={desktop} alt={alt} className="desktop-image" />
            <img src={mobile} alt={alt} className="mobile-image" />
        </section>
    )
}