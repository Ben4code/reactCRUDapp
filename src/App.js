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

  onEdit = (name)=>{
    console.log('Edit item')
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
        
        <h1>Welcome to CRUD</h1>
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
