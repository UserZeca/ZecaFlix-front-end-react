import React from 'react';
import styled from 'styled-components';


function FormField({label, value, name , type, onChange}){




    return(
    <div>
        <label>
        
        { label }

        <input type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            /> 

        </label>
    
    </div>

    );

};


export default FormField;