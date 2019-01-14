import React, { Component } from 'react';
import './App.css';

import ProductItem from './components/productItem';
import AddItem from './components/AddItem';
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  state = {
    products: []
  }

  componentWillMount(){
    //Async call to localstorage/db-server
     const products = JSON.parse(localStorage.getItem('products'));
     this.setState({products: products})
     //console.log(products);
  }


  getProducts = ()=>{
    //Get products from localstorage.
    return localStorage.getItem('products');
  }

  onDelete = (name) =>{
    //filter and delete matched item.
    const newProducts = this.state.products.filter((product)=>{
        return product.name !== name;
    });
    this.setState({products: newProducts});
  }

  onEdit = (newProduct)=>{
    const updatedProduct = this.state.products.map((product)=>{
      console.log(product.id, newProduct.id);
      if(product.id === newProduct.id){
        return newProduct;
      }else{
        return product;
      }  
    });
    this.setState({products: updatedProduct});
  }

  newItem = (theItem) =>{
    //Update state with new item.
    this.setState({
      products: [theItem, ...this.state.products]
    })

  }
   
  
  render() {
    return (
      <div className="App">
        
        <h1>Welcome to React CRUD</h1>
        <div className="container">
          <br/>
          <AddItem addItem={this.newItem}/>
          <br/>
          <div className="divider"></div>
          <br/>
        </div>
        
        {this.state.products.map((product)=>{
          return(
            <div className="container"  key={product.name}>
              <ProductItem deteleItem={this.onDelete} editItem={this.onEdit} {...product}/>  
            </div>
          ) 
        })}
      </div>
    );
  }
}

export default App;
