import React from 'react';
import Logo from '../../assets/img/Sabaflix.png';
import Button from '../Button/';
//import ButtonLink from './components/ButtonLink';
import './style.css'

const Menu = () => {
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="Sabaflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;