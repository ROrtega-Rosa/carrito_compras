/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export const CartItem = ({data,delFromCart}) => {
    let {id, name, price, imagen,quantity}= data;

  return (
    
    <div style={{border:"thin solid gray",padding:"1rem"}}>
      <img src={imagen} style={{width:"5%"}}/>
      <h4>{name}</h4>
      <h5>{price}€ x {quantity} = {price*quantity} €</h5>
      <button onClick={()=>delFromCart(id)}>Eliminar uno</button>
      <button onClick={()=>delFromCart(id,true)}>Eliminar todos</button>
    </div>
    
  )
}
