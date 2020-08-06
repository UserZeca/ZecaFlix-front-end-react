import React , { useState ,useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import useForm from '../../../components/hooks'
import categoriesRepository from '../../../components/repositories/categorias'

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

    const { valores ,handleDoValorCampo, clearForm} = useForm(valoresIniciais);
    
 

    useEffect(() => {
        /*const URL = window.location.hostname.includes('localhost') 
        ? 'https://zecaflix.herokuapp.com/categorias' 
        : 'http://localhost:8080/categorias';
        */
     //  const URL = 'http://localhost:8080/categorias';
        categoriesRepository.getAllData().then( (respostaDoServidor) => {
            setCategorias([
                ...respostaDoServidor,
            ])
            console.log(respostaDoServidor);
        }).catch((err) =>{
            // Mostrar erro ao usuário ( Tratar o erro)
            console.log(err);
        })

    },[]);


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

                    clearForm(valoresIniciais);

                } }> 

                
                    <FormField
                     label="Nome da Categoria:" 
                     value={valores.nome} 
                     name="nome" 
                     type="text"
                     onChange={ handleDoValorCampo }
                     />
                     
                    <FormField
                     label="Descrição:"
                     value={valores.descricao}
                     name="descricao" 
                     type="textarea"
                     onChange={ handleDoValorCampo }
                     />

                    <FormField
                     label="Cor:" 
                     value={valores.cor} 
                     name="cor" 
                     type="color" 
                     onChange={ handleDoValorCampo }
                     />
     
                    <Button>
                        Cadastrar
                    </Button>
                


            </form>

            { categorias.length === 0 && (<div>
                    Carregando...
                </div>

            )}

            <ul>

                {categorias.map((categoria, index) =>{
                    
                    return (
                    <li key={`${categoria}${index}`} >
                         {categoria.titulo} 
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