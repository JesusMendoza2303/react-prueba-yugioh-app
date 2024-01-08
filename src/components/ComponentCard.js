import React from 'react'
import { useFetchCard } from '../hooks/useFetchCards';
import { CardGrid } from './CardGrid';


//aqui lo que hago es montar todo, es decir, llamo al hook donde
//esta el loading y carga de las cartas

export const ComponentCard = ({card}) => {


 const {data:images, loading}= useFetchCard (card);
//aqui llamo al loading  
    return (
      <>
    <h3>{card}</h3>

    {loading && <p>Loading</p>}
  
    <div className='card-grid'>
     
    
    <ol>

        {
          images.map((img)=>(
            <CardGrid key={img.id}
            {...img}
            />
          ))
        }
    </ol>
    </div>
 </>
  )
}
