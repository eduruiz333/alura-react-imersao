import React from "react";
import Logo from '../../assets/img/Avengers-Logo-PNG-Transparent-Avengers-Logo-715x715.png'
import './Menu.css'
import Button from "../Button";

//import ButtonLink from "../components/ButtonLink";

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Vingadores!" />
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;

