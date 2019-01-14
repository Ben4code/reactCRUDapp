import React, { Component } from 'react'

export default class AddItem extends Component {
  render() {
    
    const getItem = (e)=>{
        //Prevent default
        e.preventDefault();
        if(this.nameInput !== '' && this.priceInput !== ''){
            //Construct new product item object
            const theItem = {
                name: this.nameInput.value,
                price: this.priceInput.value
            }
            //Call addItem and pass new object to it
            this.props.addItem(theItem);
            //Wipe input fields.
            this.nameInput.value = '';
            this.priceInput.value = '';
        }else{
            //Error validation.
            return alert("Fields can not be empty!");
        }
        
    }

    return (
      <div>
        <h5>Add a new Product</h5>
        <div className="card-panel grey lighten-3">
            <div className="row">
                <form onSubmit={getItem}>
                    <div className="input-field col m10 s8" style={{}} >
                        <input type="text" name="name" ref={ (nameInput)=> this.nameInput = nameInput} placeholder="Enter Name"/>
                    </div>
                    <div className="input-field  col m2 s3 offset-s1">
                        <input type="text" name="price" ref={ (priceInput)=> this.priceInput = priceInput} placeholder="Enter Price"/>
                    </div>
                    <button value="submit" className="btn green">Add <i className="fa fa-plus"></i></button>
                </form>
            </div>         
        </div>
      </div>
    )
  }
}
