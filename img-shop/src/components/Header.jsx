import React from "react";
import {
  Container,
  Navbar,
  FormControl,
  Form,
  Dropdown,
  Badge,
  Nav,
  Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
function Header() {
  const {state:{cart},dispatch,productDispatch} = CartState()
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" style={{ height: 80 }} sticky='top'>
        <Container fluid>
          <Navbar.Brand className="nav-brand">
            <Link to="/" style={{ textDecoration: "none" }}>
              Image Shop
            </Link>
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search"
              className="m-auto"
              aria-label="Search"
              onChange={(e)=>productDispatch({
                type:'FILTER_BY_SEARCH',
                 payload:e.target.value
              })}
            />
          </Form>
          <Nav style={{ marginRight: "150px" }}>
            <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="brown" />
                <Badge color="brown">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 170 }}>
                {
                  cart.length>0 ?(
                    <>
                    {cart.map((prod)=>(
                      <span className="cartItem" key={prod.id}>
                        <img src={prod.image} alt={prod.name} className='cartItemImg'/>
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>Rs: {prod.price.split('.')[0]}</span>
                          </div>
                          <AiFillDelete fontSize='20px' style={{cursor:'pointer'}}
                          onClick={()=>
                          dispatch({
                            type:'REMOVE_FROM_CART',
                            payload:prod
                          })
                          }
                          />
                        </span>
                    ))}
                    </>
                  ):(<>
                      <span style={{ padding: 10 }}>Cart is Empty</span>
                     </>)
                }
                {
                  cart.length>0 && 
                  <Link to="/cart">
                  <Button style={{width:'95%', margin:'0 10px'}}>
                    Go To Cart
                    </Button>
                  </Link>
                }
               
                
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
