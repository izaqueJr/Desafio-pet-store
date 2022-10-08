import React from "react";
import './global.css'
import Navbar from './Navbar';
import Search from './Search';
export default function Header() {
    
    return(
        <header>    

        <div className="header-row header-row--1">
            <div className="header-container">
                <div className="header-collumn">   

                <Search />

                </div>

                <div className="header-collumn">
                    <img src="./src/assets/header/logo.png" alt="logo"/>
                </div>

                <div className="header-collumn">

                    <div>
                        <img src="./src/assets/header/login.png" alt="login"/>
                        <img src="./src/assets/header/carrinho.png" alt="carrinho"/>
                    </div>

                </div>

            </div>
        </div>

        <div className="header-row header-row--2">
            <div className="header-container">
                <Navbar />
                <div>
                    <details>
                        <summary> <img src="./src/assets/header/menu-hamburguer.png" alt=""/></summary>
                        
                        <nav className="menu">
                            <div>
                                <a href="#">Link</a>
                                
                                <a href="#">Link</a>
                            </div>
                        </nav>
                      </details>
                </div>
            </div>
        </div>
        
    </header>
    
    )
}