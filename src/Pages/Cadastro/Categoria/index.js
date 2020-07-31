import React , { useState } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFild';


const Container = styled.div`
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;


function CadastroCategoria(){
    
    const [categorias, setCategorias] = useState([]);  // Desistruturação de um array

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }

    
    const [valores, setValores] = useState(valoresIniciais); // Desistruturação de um array


    function setValor(chave, valor){
        setValores({    // Desistruturação de um objeto
            ...valores,
            [chave]: valor
        })

    }

    function handleDoValorCampo(e) {

        setValor(

            e.target.getAttribute('name'),
            e.target.value
        );
    
    }


    return (
      <PageDefault>
          <Container>
            <h1>Cadastro de Categoria: {valores.nome} </h1>
            
                <form onSubmit={ function handlerSubmit(info){
                    info.preventDefault();

                    setCategorias([
                        ...categorias,
                        valores
                    ]);

                } }> 

                    <FormField label="Nome da Categoria:" value={valores.nome} name="nome" type="text" onChange={ handleDoValorCampo }/>
                    <FormField label="Descrição:" value={valores.descricao} name="descricao" type="textarea" onChange={ handleDoValorCampo }/>
                    <FormField label="Cor:" value={valores.cor} name="cor" type="color" onChange={ handleDoValorCampo }/>
     
                    <button>
                        Cadastrar
                    </button>
                


                </form>

            <ul>
                {categorias.map((categoria, index) =>{
                    

                    return (
                    <li key={`${categoria}${index}`} >
                         {categoria.nome} 
                    </li>
                    )
                    


                })}
            </ul>


            <Link to="/"> 
                Ir para home
            </Link>
          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroCategoria;