/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


export const ProductItem = ({data, addToCart}) => {

  let{id,name,price,imagen}=data;
  return (
    <div style={{border:"thin solid gray",padding:"1rem"}}>
      <img src={imagen} style={{width:"90%", height:"60%"}}/>
      <h4>{name}</h4>
      <h5>{price}€</h5>
      <button onClick={()=>addToCart(id)}>Agregar</button>

    </div>
  )
}
