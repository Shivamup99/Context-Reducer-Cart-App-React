import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
import { productReducer } from './Reducer';
const Cart = createContext()
faker.seed(99)
const Context = (props) => {
    const products = [...Array(30)].map(()=>({
        
            id:faker.datatype.uuid(),
            name:faker.animal.cow(),
            image:faker.image.image(),
            price:faker.commerce.price(),
            inStock:faker.random.arrayElement([0,3,2,5,6]),
            fastDelivery:faker.datatype.boolean(),
            ratings:faker.random.arrayElement([1,2,3,4,5])
    }))
    

    const [state,dispatch] = useReducer(cartReducer,{
        products:products,
        cart:[]
    })

    const [productState , productDispatch] = useReducer(productReducer ,{
      byStock:false,
      byFastDelivery:false,
      byRating: 0,
      searchQuery:''
    })

  return (
    <Cart.Provider value={{state,dispatch,productState , productDispatch}}>
      {props.children}
    </Cart.Provider>
  )
}

export default Context

export const CartState =()=>{
    return useContext(Cart)
}