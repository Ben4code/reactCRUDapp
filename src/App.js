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
     const products = JSON.parse(localStorage.getItem('products'));
     this.setState({products: products})
  }


  getProducts = ()=>{
    return localStorage.getItem('products');
  }

  onDelete = (name) =>{
    const newProducts = this.state.products.filter((product)=>{
        return product.name !== name;
    });
    this.setState({products: newProducts});
  }

  onEdit = (name) =>{

  } 
  
  render() {
    return (
      <div className="App">
        
        <h1>Welcome to CRUD</h1>
        <div className="container">
          <br/>
          <AddItem/>
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
