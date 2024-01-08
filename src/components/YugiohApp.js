import React, {useState} from 'react'
import { AddCard } from './AddCard';
import { ComponentCard } from './ComponentCard';

 export const YugiohApp = () => {
   const [cards, setcards] = useState(['white']);

//esta es la base donde monto todo es decir por algo decir el index

//en el addcard se pone el setcards para enviarselo al addcard
//osea le envio la lista de cartas para que se pueda añadir
//le digo que de la variable setcards envie precisamente el setcards

   return (
     <>
     <h1>Yu gi oh !!!! App</h1>
          <AddCard setcards={setcards}/>

           <hr/>
            <ol>
            {
            cards.map(card=>(
             
              <ComponentCard 
              key= {card}
              card={card}/>
             
             ) )
            }
          </ol> 
         </>
   )
//en componentcard se le manda las cartas porque es la informacion
// que tomara y va a trabajar
 }
