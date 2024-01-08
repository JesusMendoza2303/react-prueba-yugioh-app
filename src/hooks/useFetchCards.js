import { useEffect, useState } from "react"
import {getCard} from '../helpers/getNaipes'
//este es la funcion pesada porque aqui lo que hago es llamar las cartas
//y de paso el loading con un tiempo 


export const useFetchCard = (card) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //este use effect es para que la info solo cargue una vez
    useEffect (()=>{
        getCard(card)
        //como esto retorna una promesa uso el then, estoy obteniendo eso
        //del getnaipes porque ahi tengo la info de las cartas
        .then (img=> {
            setTimeout(() => {
                
                setstate({
                    data: img,
                    loading:false
                });

            },1500);
        });
        //pongo el then por si se cumple me das las imagenes
    },[card]);
    //esto es para que se haga una sola vez


    return state;
}
