import React, { useContext} from 'react';
import { InventoryContext } from '../Context/InventoryContext';

const InventoryList =({productDetails})=> {
    const { removeProduct } = useContext(InventoryContext)
        return( 
               <div>
                   <br/>
                   <li> Product: {productDetails.productName}</li>
                   <li> Quantity: {productDetails.produtquantity}</li>
                   <button onClick = {() => {removeProduct(productDetails.id)}}> REMOVE PRODUCT</button>
                   
               </div>
        )
    
}

export default InventoryList;