import React,{useContext} from 'react'
import   '../App.css';
import $ from 'jquery';
import {InventoryContext} from '../Context/InventoryContext'

const Add =  ()=> {
    const {addProduct} = useContext(InventoryContext) 
    const productHandler = (e) =>{
        e.preventDefault()
        var name = $('#productName').val()
        var quantity = $('#quantity').val()
        addProduct(name,quantity)
       }

        return(
            <div className = "App-header">
                <h1>Manage Your Inventory</h1>
                <h3>Insert Item</h3>
                <form onSubmit = {productHandler}>
                    <div class="form-group">
                        <input className="form-control" type = "text" id= "productName"  placeholder = "Product name" required/><br/>
                        <input className="form-control" type = "number" id = "quantity"  placeholder = "Enter quantity" required></input><br/>
                        <button className="btn btn-primary" type = "submit">add to inventory </button>
                    </div>
                </form>
            </div>
        )
    }

export default  Add