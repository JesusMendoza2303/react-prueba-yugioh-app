//aqui añado mis cartas nuevas
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//ahora, porque le pongo el setcards cuando lo exporto?
//porque primero me lo envio de yugiohappa, la recibo
//aqui la modifico y le vuelvo a enviar el setcards modificado
//aparte se pone ahi porque es lo que yo recibo tengo que
//especificar que es lo que voy a recibir
export const AddCard = ({setcards}) => {
//esto es para saber el estado de lo que se escribio
    const [inputValue, setinputValue] = useState('');
//esto es para entender que lo que se escribio en el texto cambio
//osea el useState esta vacio, fino, pero cuando cambia
//hay que evitar que explote, eso se hace con el 
//handle input change, osea manejamos el cambio del input
    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }
    //el handle submit es lo que envio el input
    const handleSubmit = (e) => {
        e.preventDefault();
        //el preventdefault es para evitar que se repitan
   if (inputValue.trim().length>2){        
    //esto es para que se envie el cambio en la lista
    setcards(cats=>[inputValue,...cats]);
    //esto es para evitar cosas vacias
setinputValue('');
}

    }
  return (
        <form onSubmit={handleSubmit}>
    <input

    type="text"
    value={inputValue}
    onChange={handleInputChange}/>
</form>
  )
}

//esto es para hacer que add card sea obligatorio, 
AddCard.propTypes={
    setcards: PropTypes.func.isRequired
}
