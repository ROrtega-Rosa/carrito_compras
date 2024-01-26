import { TYPES } from "../action/ShoppingAction";

export const shoppingInitialState={

products:[
    {id:1,name:"Camiseta", price: 19.99, imagen: "https://www.ahorraentinta.es/6254-large_default/camiseta-100-algodon-jhk-color-155-gr-hombre.jpg"},
    {id:2,name:"Pantalones", price: 24.99, imagen:"https://static.miinto.net/6c2f4483c46d0aeba402b772e3608df9.avif?width=693&height=842"},
    {id:3,name:"Vestido", price: 19.99, imagen: "https://vistoporlospies.es/7756-thickbox_default/bestido-cuello-descote.webp"},
    {id:4,name:"Falda", price: 16.99, imagen: "https://mivestidorazul.es/14698-large_default/falda-midi-satinada-pclorelei-beige.jpg"},
    {id:5,name:"Sudadera", price: 29.99, imagen:"https://www.ahorraentinta.es/10296-large_default/sudadera-capucha-adulto-unisex-roly-50-algodon-50-poliester.jpg"},
    {id:6,name:"Abrigo", price: 89.99, imagen:"https://static.miinto.net/6ae4ac4b8d9ac2fdac1823b67fa54251.avif?width=693&height=842"},
],
cart:[],

}

export function shoppingReducer(state,action){

    switch(action.type){

        case TYPES.ADD_TO_CART:{

            let newItem= state.products.find(products=>products.id===action.payload);
            let itemInCart=state.cart.find(item=>item.id===newItem.id);
           // console.log(newItem);

           return itemInCart ? 
           { ...state, 
            cart: state.cart.map(item=>item.id===newItem.id ? {...item,quantity:item.quantity + 1}:item)
        
            } : 
           
           {...state, cart:[...state.cart,{...newItem,quantity:1}]}

           
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

            
            let itemToDelete=state.cart.find(item=>item.id===action.payload);

            return itemToDelete.quantity>1 ? {
                ...state,
                cart:state.cart.map(item=>item.id===action.payload ? {...item,quantity:item.quantity-1}:item)
            } :{

                ...state,
                cart:state.cart.filter(item=>item.id!== action.payload)

            }
            


        }
        case TYPES.REMOVE_ALL_FROM_CART:{

            return {

                ...state,
                cart:state.cart.filter(item=>item.id!== action.payload)

            }

        }
        case TYPES.CLEAR_CART : {

            return shoppingInitialState;
        }

        default:
            return state;
        

    }
}