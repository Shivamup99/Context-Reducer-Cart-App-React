import React, { useEffect, useState } from 'react'
import { Button, Col, Form, ListGroup, Row,Image } from 'react-bootstrap'
import Rating from '../components/Rating'
import { CartState } from '../context/Context'

function Cart() {
  const {state:{cart},dispatch} = CartState()
  const [total,setTotal] = useState()

  useEffect(()=>{
    setTotal(cart.reduce((tot ,mon)=> tot + Number(mon.price)*mon.qty,0))
  },[cart])
  return (
    <>
    <div className="home">
     <div className="productContainer">
       <ListGroup>
         {cart.map((prod)=>(
         <ListGroup.Item key={prod.id}>
           <Row>
             <Col md={2}>
               <Image src={prod.image} alt={prod.name} fluid rounded/>
               </Col>
               <Col md={2}>
                 <span>{prod.name}</span>
                 </Col>
                 <Col md={2}>
                 <span>{prod.price}</span>
                 </Col>
                 <Col md={2}>
                   <Rating rating={prod.ratings}/>
                   </Col>
                   <Col md={2}>
                     <Form.Control as="select" value={prod.qty}
                     onChange={(e)=>
                    dispatch({
                      type:'CHANGE_CART_QTY',
                      payload:{
                        id:prod.id,
                        qty:e.target.value
                      }
                    })
                    }
                     >
                       {[...Array(prod.inStock).keys()].map((n)=>(
                         <option key={n+1}>{n+1}</option>
                       ))}
                       </Form.Control>
                     </Col>
                     <Col md={2}>
                       <Button type='button' variant='danger' 
                       onClick={()=>
                      dispatch({
                        type:'REMOVE_FROM_CART',
                        payload:prod
                      })
                      }>Remove</Button>
                       </Col>
           </Row>
           </ListGroup.Item>
         ))}
       </ListGroup>
       </div> 
       <div className="filters sum">
         <span className='title'>Subtotal ({cart.length}) items</span>
         <span style={{fontWeight:700 , fontSize:20 ,color:'crimson'}}>Total Rs: {total}</span>
         <Button type='button'  disabled={cart.length===0}>
           Proceed to Checkout
           </Button>
         </div>
      </div>
    </>
  )
}

export default Cart