import React from 'react'
import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/ShoppingReducer'
import { ProductItem } from './ProductItem';
import '../App.css';
import { CartItem } from './CartItem';
import { TYPES } from '../action/ShoppingAction';

export const ShoppingCart = () => {
    const [state, dispatch]=useReducer( shoppingReducer, shoppingInitialState );
    const {products,cart} = state; 

    //agregar al carrito
    const addToCart=(id)=>{

      //console.log(id);
      dispatch({type:TYPES.ADD_TO_CART,payload:id})
    }
    //eliminar
    const delFromCart=(id, all=false)=>{

      if(all){
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
      }else{
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
      }
    }
    //limpiar carrito
    const clearCart=()=>{

      dispatch({type:TYPES.CLEAR_CART});
    }
  return (
    <div>
        <h2>Tienda de Ropa</h2>
        <h3>Productos</h3>
        <article className='box grid-responsive'>
            {
              products.map((p)=><ProductItem key={p.id} data={p} addToCart={addToCart}/>)
            }
          
        </article>
        <h3>Carrito</h3>
        <article className='box'>
          <button onClick={clearCart}>Limpiar Carrito</button>
          {
            cart.map((c,index)=><CartItem key={index} data={c} delFromCart={delFromCart} />)
          }
        </article>
    </div>
  )
}
