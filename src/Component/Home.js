import React, {Component} from 'react';
import { InventoryContext } from '../Context/InventoryContext';

class Home extends Component{
    render(){
        return(
            <div> 
                <InventoryContext.Provider>
                    <button>Add Product</button>
                    <button>Remove Product</button>
                    <button>View Inventory</button>
               </InventoryContext.Provider> 
            </div>
        )
    }
}

export default Home