import React,{useContext} from 'react'
import   '../App.css';
import $ from 'jquery';

const Add =  ()=> {
    const {addProduct} = useContext(addProduct) 

    const productHandler = (props) =>{
        var name = $('#productName').val()
        var quantity = $('#quantity').val()
        addProduct(name,quantity)
       }
       
        return(
            <div className = "App-header">
                <h1>Manage Your Inventory</h1>
                <h3>Insert Item</h3>
                <form onSubmit = {productHandler}>
                    <label for = 'product name'>Product Name: </label>
                    <input type = "text" id= "productName" /><br/>
                    <label for = 'Quantity'> Enter Quantity: </label>
                    <input type = "number" id = "quantity"></input><br/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        )
    }

export default  Add