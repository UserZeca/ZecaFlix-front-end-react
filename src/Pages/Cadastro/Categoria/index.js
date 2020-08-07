import React , { useState ,useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import { Link , useHistory } from 'react-router-dom';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import useForm from '../../../hooks'
import categoriesRepository from '../../../repositories/categorias'
import { Container } from './styles'


function CadastroCategoria(){
    
    const [categorias, setCategorias] = useState([]);  // Desistruturação de um array
    const history = useHistory();

    const valoresIniciais = {
        titulo: '',
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
        categoriesRepository.getAll().then( (respostaDoServidor) => {
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
            <h1>Cadastro de Categoria: {valores.titulo} </h1>
            
                <form onSubmit={ function handlerSubmit(info){
                    info.preventDefault();

                  const searchCategoria =  categorias.find((categoria) =>{
                        return categoria.titulo === valores.titulo;
                    }) 

                    
                    if(searchCategoria === undefined){
                        
                        setCategorias([
                            ...categorias,
                            valores
                        ]);

                        categoriesRepository.create({
                            id: '',
                            titulo: valores.titulo,
                            cor: valores.cor,
                            link_extra: {
                                text: '',
                                url: ''
                              }
                          })
                          .then(() =>{
                            history.push('/');
                            clearForm(valoresIniciais);
                          })
                        
                    }else{
                        
                        alert('Essa categoria já exite')
                        clearForm(valoresIniciais);
                    
                    }
                    



                } }> 

                
                    <FormField
                     label="Nome da Categoria:" 
                     value={valores.titulo} 
                     name="titulo" 
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