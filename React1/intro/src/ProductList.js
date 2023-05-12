import React, { Component } from 'react'
import { Table,Button  } from 'reactstrap'

export default class ProductList extends Component {
 
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
        <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Product Name 
      </th>
      <th>
        Unit Price 
      </th>
      <th>
        Quantit Per  Unit
      </th>
      <th>
        units In Stock
      </th>
      <th>
        
      </th>
    </tr>
  </thead>
  <tbody {
            this.props.products.map(product =>(
                <tr
                // onClick = {()=>this.changeCategory(category)}
                  key = {product.id}
                >
                    <th scope="row">
        {product.id}
      </th>
      <td>
        {product.productName}
      </td>
      <td>
      {product.unityPrice}
      </td>
      <td>
      {product.quantityPrice}
      </td>
      <td>
      {product.unitsInStock}
      </td>
      <td>
      <Button onClick={()=>this.addToCart(product)} color="link">
    link
  </Button> add
      </td>

                </tr>
            ))
        }>
 
  </tbody>
</Table>
      </div>
    )
  }
}
