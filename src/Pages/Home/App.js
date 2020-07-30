import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/PageDefault/components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carroussel from '../../components/Carroussel';
import Footer from '../../components/PageDefault/components/Footer';
import PageDefault from '../../components/PageDefault';
import '../../index.css';





function Home() {
  return (
    <PageDefault>
  
      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é front-end? Trabalhando na área."}
 
      >
      </BannerMain>

      <Carroussel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
      />
       
      <Carroussel
          false
          category={dadosIniciais.categorias[1]}
      />

       <Carroussel
          false
          category={dadosIniciais.categorias[2]}
      />
       <Carroussel
          false
          category={dadosIniciais.categorias[3]}
      />
       <Carroussel
          false
          category={dadosIniciais.categorias[4]}
      />
       <Carroussel
          false
          category={dadosIniciais.categorias[5]}
      />


    </PageDefault>

  );
}

export default Home;
