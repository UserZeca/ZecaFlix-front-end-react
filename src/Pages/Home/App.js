import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/PageDefault/components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
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

      <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
      />
       
      <Carousel
          false
          category={dadosIniciais.categorias[1]}
      />

       <Carousel
          false
          category={dadosIniciais.categorias[2]}
      />
       <Carousel
          false
          category={dadosIniciais.categorias[3]}
      />
       <Carousel
          false
          category={dadosIniciais.categorias[4]}
      />
       <Carousel
          false
          category={dadosIniciais.categorias[5]}
      />


    </PageDefault>

  );
}

export default Home;
