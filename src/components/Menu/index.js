import React from 'react';
import Logo from '../../assets/img/Sabaflix.png';
import ButtonLink from '../Button/';
import './style.css'
import { useHistory, Link } from 'react-router-dom';

const Menu = () => {
    const history = useHistory();
    
    const pressButton = () => {
        history.push("/cadastro");
    }

    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="Sabaflix" />
            </Link>

            <ButtonLink as="a" className="ButtonLink" onClick={pressButton} >
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;