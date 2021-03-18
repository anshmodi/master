import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';
export const InventoryContext = createContext();

const InventoryContextProvider = (props)=> {
       const [productDetails,setProductDetails]= useState ([
           {productName: '', produtquantity: '', id: '' }
        ]);
       const addProduct  = (productName,produtquantity)=>{
           setProductDetails([...productDetails, { productName, produtquantity, id: uuid()}])
       }
       const removeProduct = (id) =>{
           setProductDetails(productDetails => productDetails.id !== id)
       }
        return(
            <InventoryContext.Provider value = {{productDetails,addProduct,removeProduct}}>
                {props.children}
            </InventoryContext.Provider>
        )
    }

export default InventoryContextProvider;