import React, { Component } from 'react'

export default class ProductItem extends Component {

render() {
    const {name, price, deteleItem, editItem} = this.props;
    return (
        <div className="row">
            <div className="col m6 offset-m3 s12">
                <div className="card-panel grey lighten-2">
                    <div className="chip white">
                    <span >{name}</span> {` | `} 
                    <span>${price}</span> {` `}
                    </div>
                    <button 
                        className="btn-floating blue"
                        onClick={editItem.bind(this, name)}
                    ><i 
                        className="fa fa-pencil"
                    ></i></button> {` `}
                    <button 
                        className="btn-floating red"
                        onClick={deteleItem.bind(this, name)}
                    ><i 
                        className="fa fa-trash"
                    ></i></button>    
                </div>
            </div>
      </div>
    )
  }
}
