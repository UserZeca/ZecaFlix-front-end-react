import React, { useEffect ,useState } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link , useHistory } from 'react-router-dom';
import useForm from '../../../hooks';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

const Container = styled.div`
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoriaTitles = categorias.map(({titulo}) => titulo);


    const { handleDoValorCampo , valores} = useForm({
      titulo: '',
      url: '',
      categoria: '',
    });

    useEffect(() =>{

      categoriesRepository.getAllWithVideos()
      .then((categoriasFromServer) =>{
        setCategorias(categoriasFromServer);
      });

    },[]);
    


    return (
      <PageDefault>
          <Container>
            <h1>Cadastro de Video</h1>

            <form onSubmit={(event) => {
              event.preventDefault();
              // alert('Video cadastrado com sucesso');
              
              const categoriaEscolhida = categoriaTitles.find((categoria) => {
                  return categoria === valores.categoria;
              })

              if(categoriaEscolhida === false){
                  alert('Erro ao cadastrar video');
              }else{
                  videosRepository.create({
                    categoriaId: categoriaEscolhida.id,
                    id: '',
                    titulo: valores.titulo,
                    url: valores.url,
                  })
                  .then(() =>{
    
                    history.push('/');
    
                  })
              }



             /* videosRepository.create({
                titulo: valores.titulo,
                url: valores.url,
                categoria: categoriaEscolhida,
              })
              .then(() =>{

                history.push('/');

              })
              */

            }}>
              <FormField
                label="Título do Video"
                value={valores.titulo}
                name="titulo" 
                type="text"
                onChange={ handleDoValorCampo }
              />
              <FormField
                label="URL"
                value={valores.url}
                name="url" 
                type="text"
                onChange={ handleDoValorCampo }
              />

              <FormField
                label="Categoria"
                value={valores.categoria}
                name="categoria" 
                type="text"
                onChange={ handleDoValorCampo }
                suggestions= {categoriaTitles}
              />               
              <Button type="submit">
                  Cadastrar
              </Button>

            
            </form>
            
            <Link to="/cadastro/categoria"> 
                Cadastrar Categoria
            </Link>
          </Container>
      </PageDefault>
  
    )
  };

  export default CadastroVideo;