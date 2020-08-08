import React , { useState ,useEffect } from 'react';

import PageDefault from '../../../components/PageDefault';
import { useHistory } from 'react-router-dom';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import useForm from '../../../hooks'
import categoriesRepository from '../../../repositories/categorias'
import { Container, ContainerBox, ItenBox, ButtonLink, ContainerList, ItemList } from '../styles'



const menuWithButtonLink = false;

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
      <PageDefault menuWithButtonLink={menuWithButtonLink}>
          <Container>
            <h1>Cadastro de Categoria: {valores.titulo} </h1>
            
                <form  onSubmit={ function handlerSubmit(info){
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


                    <ContainerBox> 
                        <ItenBox>  
                            <Button type="submit">
                                Cadastrar
                            </Button>
                        </ItenBox>
                        
                        <ItenBox>
                            <ButtonLink to="/"> 
                                Home
                            </ButtonLink>
                            <ButtonLink to="/cadastro/video"> 
                                Cadastrar Vídeo
                            </ButtonLink>
                        </ItenBox>
                    </ContainerBox>

            </form>

            { categorias.length === 0 && (<div>
                    Carregando...
                </div>

            )}

            <ContainerList>

                {categorias.map((categoria, index) =>{

                return (
                    <ItemList backgroundColor={categoria.cor} key={`${categoria}${index}`} >
                         {categoria.titulo}
                    </ItemList>
                    )

                })}
            </ContainerList>

          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroCategoria;