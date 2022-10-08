import React from "react";
import './global.css'

export default function Search() {
    
    return(
        <form action="" className="search-input">
            <input type="text" placeholder="Pesquisar"/>
            <button>
                <img src="./src/assets/header/busca.png" alt="busca"/>
            </button>
        </form>
    )
}