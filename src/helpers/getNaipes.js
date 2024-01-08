//aqui se procesa la info de las cartas

export const getCard=async(card)=> {
    const url= `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${encodeURI(card)}`;
    const resp= await fetch (url);
    const {data}= await resp.json();
    //solicito la infor que quiero
    const naipe = data.map(img => {
      return { 
       
        id:  img.id,
        name: img.name,
        type: img?.type || '--',
        attribute: img?.attribute || '--',
        archetype: img.archetype || '--',
        url: img.card_images[0]?.image_url,
        desc: img.desc,
        level: img.level,
        race: img.race,
        atk: img.atk,
        def: img.def
        

        }
      })

      // console.log( 'naipe:', naipe);
      // console.log( 'card:', data);

      return naipe;
}