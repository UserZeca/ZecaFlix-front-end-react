import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;


function create(objetoDoVideo){
    setTimeout(()=>{console.log('Enviando novo video ao servidor...')}, 1000);
    return fetch(`${URL_VIDEOS}`,{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
    .then(
        async (respostaDoServidor) => {
            if(respostaDoServidor.ok){   
                const resposta = await respostaDoServidor.json();
                
                return resposta;
            }
            throw new Error('Não foi possível se conectar ao servidor!');
        });
}


export default {
    create,
};