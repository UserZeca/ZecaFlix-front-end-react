import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';


const Container = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    


  
`;


const List = styled.ul`
    margin: 0;
    padding: 0;

`;

const ItenOfList = styled.li`
    display: inline-block;
    list-style: none;
    font-size: 20vh;
    margin: 0 5px;
    transform: opacity .6;
    animation-name: test;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;

    @keyframes test  {
        0%   {color: red;}
        50%  {color: blue;}
        75%  {color: black;} 
    }



    &:hover{

        opacity: 0.6;

    }



    
    @media(max-width: 800px){
        font-size: 10vh;
    }       

`;


function Erro404(){

    return (
       
       <PageDefault>
       
        <Container>
                <List>
                    
                    <ItenOfList>
                    E
                    </ItenOfList>
                    
                    <ItenOfList>
                    R
                    </ItenOfList>

                    <ItenOfList>
                    R
                    </ItenOfList>
                    
                    <ItenOfList>
                    O
                    </ItenOfList>
                    
                    <ItenOfList>
                    
                    </ItenOfList>
                    
                    <ItenOfList>
                    4
                    </ItenOfList>
                    
                    <ItenOfList>
                    0
                    </ItenOfList>
                    
                    <ItenOfList>
                    4
                    </ItenOfList>
                
                </List>


            </Container>

        </PageDefault>


    );

}

export default Erro404;

