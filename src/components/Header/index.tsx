import React, {useEffect, useState} from "react";

import Navbar from './Navbar';
import Search from './Search';

import { headerMenu } from "./menu";
import './global.css'
import NavbarMobile from "./NavbarMobile";
export default function Header() {

    const [sticky, setSticky] = useState<boolean>(false);
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);

    function onSwitch() {
        openNavbar ? setOpenNavbar(false) : setOpenNavbar(true);
    }
    
    function setSticker() {
        
        const header:any = document.getElementById("header-navbar");
        
        const sticky = header.offsetTop;
        
        window.pageYOffset > sticky ? setSticky(true) : setSticky(false);
        
    }

    useEffect(() => {
        window.onscroll = () => setSticker();
    })


    return(
        <header>    

        <div className="header-row header-row--1">
            <div className="header-container">
                <div className="header-collumn header-collumn--search">   
                    <Search />
                </div>

                <div className="header-collumn header-collumn--logo">
                    <img src="./src/assets/header/logo.png" alt="logo"/>
                </div>

                <div className="header-collumn header-collumn--user-area">
                    <img src="./src/assets/header/login.png" alt="login"/>
                    <img src="./src/assets/header/carrinho.png" alt="carrinho"/>
                </div>

            </div>
        </div>

        <div className={`header-row header-row--2 ${sticky ? "header-sticky" : 'header-sticky--false' } `}  >
            
            <div className={`nav-area nav-open--${openNavbar}`}>

                <div className="nav-area-container container">

                    <button onClick={() => onSwitch()}  className="buton-header-navbar"> 
                        {
                            !openNavbar ? 
                            <img src="/icons/menu-hamburguer.png" alt="" /> 
                            :
                            <img src="/icons/close.png" alt="" className="nav-button-close" /> 
                        }
                    </button>

                    <div className="nav-content">

                        <div className="nav-title--mobile">
                            <h3>Categorias</h3>
                        </div>

                        <Navbar menu={headerMenu} />
                        <NavbarMobile menu={headerMenu} />

                        <button onClick={() => onSwitch()} className="buton-more-links"> 
                            {
                                !openNavbar ? 
                                <img src="/icons/menu-hamburguer.png" alt="" /> 
                                :
                                <img src="/icons/close.png" alt="" className="nav-button-close" /> 
                            }

                        </button>

                        <nav className={`nav-more-links nav-open--${openNavbar}` }>
                            <div className="nav-more-content ">

                                <a href="#">More Links 1 </a>
                                
                                <a href="#">More Links 2 </a>
                            </div>
                            
                        </nav>
                       
                    </div>
                </div>
            </div>

        </div>
        <div className={`search-bar--${sticky ? "sticky-true" : "sticky-false" } `}>
            <Search  />
        </div>
        
    </header>
    
    )
}