import React , { useEffect , useState} from 'react';
import BannerMain from '../../components/BannerMain';
//import db from '../../data/db.json';
import Carroussel from '../../components/Carroussel';
import PageDefault from '../../components/PageDefault';
import '../../index.css';
import Data from '../../repositories/categorias';


function Home() {
  const [db, setDados ] = useState([]); 
  
  
  useEffect(() => {
    Data.getAllWithVideos().then( (respostaDoServidor) => {
      
      setDados(respostaDoServidor);

    })
    .catch((err) =>{
      // Mostrar erro ao usuário ( Tratar o erro)
      console.log(err);
    });
  },[]);
  

  return (
    <PageDefault>
      {db.length === 0 && (<div> Carregando..</div>) }
      {db.length >= 1 && (
         <>
         <BannerMain 
          videoTitle={db[0].videos[0].titulo}
          url={db[0].videos[0].url}
          videoDescription={"O que é front-end? Trabalhando na área."}
      
          >
          </BannerMain>
      

          {db.map((db, index) =>{
              
              if(index === 0){
             
                  return (
                    <>
                      <Carroussel
                      ignoreFirstVideo
                      category={db}
                      />
                    </>
                  )
              }
              
              return (
                <>
                  <Carroussel key={db.id}
                      false
                      category={db}
                  />

                    


                </>
              )

          })}
        
        
        
        
        </>
      
      )}

      


    {/*
      <BannerMain 
      videoTitle={db.categorias[0].videos[0].titulo}
      url={db.categorias[0].videos[0].url}
      videoDescription={"O que é front-end? Trabalhando na área."}
 
      >
      </BannerMain>
      
      {db.length === 0 && (<div> Carregando..</div>) }
      
      
      <Carroussel
          ignoreFirstVideo
          category={db.categorias[0]}
      />
       
      <Carroussel
          false
          category={db.categorias[1]}
      />

       <Carroussel
          false
          category={db.categorias[2]}
      />
       <Carroussel
          false
          category={db.categorias[3]}
      />
       <Carroussel
          false
          category={db.categorias[4]}
      />
       <Carroussel
          false
          category={db.categorias[5]}
      />
      */}

    </PageDefault>

  );
}

export default Home;
