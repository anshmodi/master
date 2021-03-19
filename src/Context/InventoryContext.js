import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';

export const InventoryContext = createContext();

const InventoryContextProvider = (props) => {
       let [productDetails, setProductDetails]= useState ([
           {productName: 'Sample', produtquantity: '11', id: '1' }
        ]);
       const addProduct = (productName, produtquantity) => {
            setProductDetails([...productDetails, {productName, produtquantity, id: uuid()}])
       }
         const removeProduct = (id) => {
            setProductDetails (productDetails.filter(productDetails => productDetails.id !== id))
     }
        return(
            <InventoryContext.Provider value={{productDetails, addProduct, removeProduct}}>
                { props.children }
            </InventoryContext.Provider>
        )
    }

export default InventoryContextProvider;