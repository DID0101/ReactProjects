
import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import {Col, Container,Row} from 'reactstrap';
import alertify from 'alertifyjs'
import {Switch,Route} from 'react-router-dom'
import NotFoun from './NotFound';
import CartList from './CartList';
import NotFound from './NotFound';
import FormDemo1 from '/FormDemo1'
import FormDemo2 from './FormDemo2';

export default class App extends Component {
  state = { currentCategory :"", products:[], cart : []};

  componentDidMount(){  
    this.getProducts();
  }

  state = {currentCategory:"",products:[]}

  changeCategory = (category)=>{
    this.setstate({currentCategory:category.categoryName});
    this.getProducts(category.id);
  };

  getProducts = (categotyId)=>{

    let url = "http//localhost:3000/products";
    if (categotyId){
      url +="?categoryId"+categotyId;
    }

    fetch(url)
    .then(response=>response.json())
    .then(data.this.setstate({products:data}));;
  };
  addToCart=(product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id ===product.id)
    if (addedItem){ 
      addedItem.quantity +=1;
    }
    else{
      newCart.push({product:product,quantity:1}); 
    }
    //alert(product.productName);
  
    this.setState({cart:newCart});
    alertify.success(product.productName +  " added to cart!",2 )
  }
  removeFromCart=(product)=>{
    let newCart =  this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart })
    alertify.error(product.productName +  " Removed!",2 )
  }
  render(){
    let productInfo = {title:"Product List"}
    let catogoryInfo = {title:"Category List"}
    return (
      <div >
        <Container>

            <Navi removeFromCart={this.removeFromCart} cart =  {this.state.cart} />
          
          <Row> 
  
          </Row>
             <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
               changeCategory={this.changeCategory} 
               info = {catogoryInfo} />
            </Col>
            <Col xs = "9">
              <Switch>
                <Route exact path = "/" render ={prop =>(
                  <ProductList 
                  {...prop}
                  products={this.state.products}
                  addToCart= {this.addToCart}
                  currentCategory={this.state.currentCategory} 
                  info = {productInfo} />
                )
                }/>
                <Route exact path = "/cart" render ={prop =>(
                  <CartList 
                  {...prop}
                  cart={this.state.cart}
                  removeFromCart= {this.removeFromCart}
                  />
                )
                }/>
                <Route path='/form1' component={FormDemo1}/>
                <Route path='/form2' component={FormDemo2}/>
                <Route  component= {NotFoun}/>
              </Switch>
              
            </Col>
          
        </Container>
  
        {/* <h2>hello from react!!!</h2> */}
  
      </div>
  
    );
  }
}


