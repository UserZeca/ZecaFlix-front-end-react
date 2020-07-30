import React from 'react';
import Menu from './components/Menu';
import { Main } from './styles'
import Footer from './components/Footer';
import AppWrapper from './components/AppWrapper';



function PageDefault({children}){

    return (
        <AppWrapper>
            <Menu />
               <Main> 
                  {children}
                </Main>
            <Footer />
        </AppWrapper>

    );

}


export default PageDefault;