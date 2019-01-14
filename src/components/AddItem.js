import React, { Component } from 'react'

export default class AddItem extends Component {
  render() {
    
    AddItem = (item)=>{
        console.log(item)
    }

    return (
      <div>
        <h5>Add a new Product</h5>
        <div className="card-panel grey lighten-2">
            <div className="row">
                <form onSubmit={AddItem}>
                    <div className="input-field  col m10 s8" style={{}} >
                        <label htmlFor="name">Enter name</label>
                        <input type="text" value="" onChange={AddItem}/>
                    </div>
                    <div className="input-field  col m2 s3 offset-s1">
                    <label htmlFor="price">Price</label>
                        <input type="text" name="price" value="" onChange={AddItem}/>
                    </div>
                    <button className="btn green">Add <i className="fa fa-plus"></i></button>
                </form>
            </div>         
        </div>
      </div>
    )
  }
}
