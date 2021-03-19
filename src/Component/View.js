import React,{useContext} from 'react'
import   '../App.css';
import {InventoryContext} from '../Context/InventoryContext'
import InventoryList from '../Component/InventoryList'

const View = ()=>{
const {productDetails} = useContext(InventoryContext)

return(
    <div className = "App-header">
        <h1>Your Inventory</h1>
        <ul>
            {productDetails.map(productDetails =>{
                return(<InventoryList productDetails = {productDetails} key = {productDetails.id} />)
            })}
        </ul>
    </div>
)
}
export default View