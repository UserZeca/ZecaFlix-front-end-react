import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


const Container = styled.div`
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function CadastroVideo(){

    return (
      <PageDefault>
          <Container>
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria"> 
                Cadastrar Categoria
            </Link>
          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroVideo;