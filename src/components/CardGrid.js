import React from 'react'
//aqui es la parte visual del sistema es decir como se organiza
//visualmente las cartas
export const CardGrid = ({id, name, url, type, attribute, archetype, desc, level, atk, def, race}) => {

    
  return (
    <div className='card'>

        <img src={url} alt={name}/>
        <p>nombre de la carta: {name}</p>
        <p>descripcion: {desc}</p>
        <p>tipo:{type}</p>
        <p>atributo: {attribute}</p>
        <p>arquetipo: {archetype}</p>
        <p>race: {race}</p>
        <p>level: {level}</p>
        <p>id: {id}</p>
        <p>atk: {atk}</p>
        <p>def: {def}</p>


        
        </div>
  )
}
