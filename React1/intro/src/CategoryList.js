import React, { Component } from 'react';
import {ListGroup,ListGroupItem} from 'reactstrapt';

export default class CategoryList extends Component {

 
   
    state = {categories : [
        {categotyId:1 , categoryName: "Baverages"},
        {categotyId:1 , categoryName: "Baverages"}
    ],
      categories : []
    };
    componentDidMount(){
      this.getCategories();
    }

    getCategories = ()=>{
      fetch("http//localhost:3000/categories")
      .then(response=>response.json())
      .then(data.this.setstate({categories:data}));;
    }

    
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
        {
            this.state.cotegories.map(category =>(
                <ListGroupItem active = {category.cartegoryName===this.props.currentCategory?true:false}
                 onClick = {()=>this.changeCategory(category)}
                  key = {category.id}
                >
                   {category.categoryName}

                </ListGroupItem>
            ))
        }
</ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
