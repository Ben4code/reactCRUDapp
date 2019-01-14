import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {name, price} = this.props;
    return (
        <div className="row" key={name}>
            <div className="col m6 offset-m3">
                <div className="card-panel grey lighten-3">
                    <div className="chip white">
                    <span >{name}</span> {` | `} 
                    <span>${price}</span> {` `}
                    </div>
                    <button className="btn-floating blue "><i className="fa fa-pencil"></i></button> {` `}
                    <button className="btn-floating red"><i className="fa fa-trash"></i></button>    
                </div>
            </div>
      </div>
    )
  }
}
