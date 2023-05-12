import React, { Component } from 'react'
import { Badge, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';
import {

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 // NavItem,
 // NavLink
 
} from "reactstrap";


export default class CartSummary extends Component {
  renderSummary(){
    return ( <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
     Your Cart //- {this.props.cart.lenght}
    </DropdownToggle>
    <DropdownMenu right>
    {
      this.props.cart.map(cartItem=>(
        <DropdownItem key ={cart.cartItem.product.id}>
        {cartItem.product.productName}
        <Badge color='danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>x</Badge>
        <Badge color='success'>{cartItem.quantity}</Badge>
        </DropdownItem>

      ))
    }
      
      <DropdownItem>Option 2</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>
      <link to = "cart">Go to cart </link>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>)

  }
  renderEmptyCart(){
    return( 
      <NavItem>
    <NavLink>Empty cart</NavLink>
    </NavItem>
    );
  }
  render() {
    
    return (
      <div>
       {this.props.cart.lenght>0?this.renderSummary():this.renderEmptyCart()}
      </div>
    )
  }
}
