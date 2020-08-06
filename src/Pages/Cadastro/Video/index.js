import React, { useEffect ,useState } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import { Link , useHistory } from 'react-router-dom';
import useForm from '../../../components/hooks';
import FormField from '../../../components/FormFild';
import Button from '../../../components/Button';
import videosRepository from '../../../components/repositories/videos';
import categoriesRepository from '../../../components/repositories/categorias';

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

      categoriesRepository.getAllData()
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
              
              const categoriaEscolhida = categorias.find((categoria) => {
                  return categoria.titulo === valores.titulo;
              })

              videosRepository.create({
                titulo: valores.titulo,
                url: valores.url,
                categoriaId: categoriaEscolhida.id,
              })
              .then(() =>{

                history.push('/');

              })
              

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