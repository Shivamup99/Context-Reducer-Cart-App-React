import React from 'react'
import Filter from '../components/Filter';
import SinProduct from '../components/SinProduct';
import { CartState } from '../context/Context'

function Home() {
    const {state:{products},
    productState:{sort,byStock,byFastDelivery,byRating,searchQuery}
  } = CartState();

 const requiredProducts = () =>{
   let sortedProducts = products;
   if(sort){
     sortedProducts = sortedProducts.sort((a,b)=>sort==='lowToHigh' ? a.price-b.price:b.price-a.price)
   }

   if(!byStock){
     sortedProducts=sortedProducts.filter((pro)=>pro.inStock)
   }

   if(byFastDelivery){
    sortedProducts=sortedProducts.filter((pro)=>pro.fastDelivery)
  }
  if(byRating){
    sortedProducts = sortedProducts.filter((pro)=>pro.ratings>=byRating)
  }
  if(searchQuery){
    sortedProducts=sortedProducts.filter((pro)=>
    pro.name.toLowerCase().includes(searchQuery))
  }
   return sortedProducts
 }

  return (
    <div className='home'>
       <Filter/>
    <div className="productContainer">
        {
            requiredProducts().map((prod)=>(
                <SinProduct prod={prod} key={prod.id}/>
            ))
        }
        </div>
        </div>
  )
}

export default Home