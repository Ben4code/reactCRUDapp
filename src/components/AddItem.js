import React, { Component } from 'react'

export default class AddItem extends Component {
    state = {
        showMsg: false
    }
    showDialogue = ()=>{
        setTimeout(()=>{
            this.setState({showMsg: !this.state.showMsg});
        }, 3000);
        this.setState({showMsg: !this.state.showMsg});
    }

    render() {
        const getItem = (e)=>{
            //Prevent default
            e.preventDefault();
            if(this.nameInput.value !== '' && this.priceInput.value !== ''){
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
                //Form validation
                this.showDialogue();
            }
        }

    return (
      <div>
        <h5>Add a new Product</h5>
        <div className="card-panel grey lighten-3">
            <div className="row">

                {this.state.showMsg ? <div className="card-panel red white-text">Fields can not be left empty!</div> : null}
            
                <form onSubmit={getItem}>
                    <div className="input-field col m10 s8">
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
