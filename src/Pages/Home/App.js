import React , { useEffect , useState} from 'react';
import BannerMain from '../../components/BannerMain';
//import db from '../../data/db.json';
import Carroussel from '../../components/Carroussel';
import PageDefault from '../../components/PageDefault';
import '../../index.css';
import Data from '../../repositories/categorias';
import Loading from './components/loading';

// Váriavel de controle de layout do menu
const menuWithButtonLink = true;

// Váriavel que aciona a animação de loading enquanto as informações do servidor chegam 
let loading = true;


function Home() {
  const [db, setDados ] = useState([]); 
  
  
  useEffect(() => {
    Data.getAllWithVideos().then( (respostaDoServidor) => {
      
      setDados(respostaDoServidor);
      loading = false;

    })
    .catch((err) =>{
      // Mostrar erro ao usuário ( Tratar o erro)
      console.log(err);
    });
  },[]);
  

  return (
   
   <PageDefault menuWithButtonLink={menuWithButtonLink}>
   

      {db.length === 0 && loading === true && (
      
        <Loading />
      
      ) }
      {db.length >= 1 && (
          <>
              <BannerMain 
                videoTitle={db[0].videos[0].titulo}
                url={db[0].videos[0].url}
                videoDescription={"O que é front-end? Trabalhando na área."}
            
                />
                
            

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
        
        )
     }

      
    </PageDefault>

  );
}

export default Home;
