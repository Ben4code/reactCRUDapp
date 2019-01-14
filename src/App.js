import React, { Component } from 'react';
import './App.css';

import ProductItem from './components/productItem';
import 'materialize-css/dist/css/materialize.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

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
  
  render() {
    return (
      <div className="App">
        
        <h1>Welcome to CRUD</h1>
        {this.state.products.map((product)=>{
          return(
            <ProductItem {...product}/>
          ) 
        })}
      </div>
    );
  }
}

export default App;
