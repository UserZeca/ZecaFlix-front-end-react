import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;


function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}

function getAll(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}

function create(objetoDaCategoria){
    return fetch(`${URL_CATEGORIES}`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(objetoDaCategoria),
    })
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                console.log('reposta', resposta);

                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}



export default {
    getAllWithVideos,
    getAll,
    create,
};