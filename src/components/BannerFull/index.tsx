import React from "react";
import './global.css'

interface BannerProps {
    src: string;
    alt?: string;
}

export default function BannerFull({src, alt} : BannerProps) {
    console.log(src, alt)
    return(
        <section className="banner-container">
            <img src={src} alt={alt} />
        </section>
    )
}