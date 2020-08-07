import React from 'react';
import Logo from '../../../../assets/img/logo.png';
//import './Menu.css';
import {LogoImg, MenuWrapper} from './styles';
//import ButtonLink from './components/ButtonLink';
//import ButtonLink from './components/ButtonLink';
import Button from '../../../Button';
import { Link } from 'react-router-dom';




function Menu({menuWithButtonLink}){
    console.log('botão valor:',menuWithButtonLink);
    return (
        <MenuWrapper>
            <Link to="/">    
                <LogoImg src={Logo} alt="zecaflix logo" />
            </Link>
            {menuWithButtonLink === true && (
                <Button  as={ Link }  to="/cadastro/video">
                    Novo vídeo
                </Button>
            
            )}
        </MenuWrapper>



    );

}


export default Menu;