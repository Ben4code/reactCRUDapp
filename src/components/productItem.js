import React, { Component } from 'react';

export default class ProductItem extends Component {
    state = {
        isEdit: false
    }

    editToggle = ()=>{
        this.setState({ isEdit: !this.state.isEdit });
    }

    updateItem = (e)=>{
        e.preventDefault();        
        const updateProduct = {
            id: this.props.id,
            name: this.nameInput.value,
            price:  this.priceInput.value
        }
        this.props.editItem(updateProduct);
         //Wipe input fields.
         this.nameInput.value = '';
         this.priceInput.value = '';
         this.editToggle();
    }

    render() {
        const { name, price, deteleItem } = this.props;
        return (
            <div className="row">
                <div className="col m6 offset-m3 s12">
                    <div className="card-panel grey lighten-2">
                        {this.state.isEdit
                            ? (
                                <form onSubmit={this.updateItem}>
                                    <div className="input-field col m10 s8">
                                        <input type="text" 
                                            name="name" 
                                            ref={ (nameInput)=> this.nameInput = nameInput} 
                                            placeholder="Enter Name" 
                                            defaultValue={name}/>
                                    </div>
                                    <div className="input-field  col m2 s3 offset-s1">
                                        <input type="text" 
                                            name="price" 
                                            ref={ (priceInput)=> this.priceInput = priceInput} 
                                            placeholder="Enter Price" 
                                            defaultValue={price}/>
                                    </div>
                                    <button value="submit" className="btn green">Add <i className="fa fa-plus"></i></button>
                                </form>
                            )
                            : (
                                <div className="product">
                                    <div className="chip white">
                                        <span >{name}</span> {` | `}
                                        <span>${price}</span> {` `}
                                    </div>
                                    <button
                                        className="btn-floating blue"
                                        onClick={this.editToggle.bind(this, name)}
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

                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
