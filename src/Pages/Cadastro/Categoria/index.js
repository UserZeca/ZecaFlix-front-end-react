import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


const Container = styled.div`
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function CadastroCategoria(){

    return (
      <PageDefault>
          <Container>
            <h1>Cadastro de Categoria</h1>

            <Link to="/"> 
                Ir para home
            </Link>
          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroCategoria;