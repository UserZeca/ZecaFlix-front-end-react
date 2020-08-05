import { useState } from 'react';


function useForm(valoresIniciais){
    const [valores, setValores] = useState(valoresIniciais); // Desistruturação de um array


    function setValor(chave, valor){
        setValores({    // Desistruturação de um objeto
            ...valores,
            [chave]: valor
        })

    }

    function handleDoValorCampo(e) {

        setValor(

            e.target.getAttribute('name'),
            e.target.value
        );
    
    }

    function clearForm(valoresIniciais){
        setValor(valoresIniciais);
    }

    return {
        valores,
        handleDoValorCampo,
        clearForm,

    }

}

export default useForm;