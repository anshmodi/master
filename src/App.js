import Add from './Component/Add'
import { InventoryContext } from './Context/InventoryContext';
function App() {
  return (
    <div className="App">
      <InventoryContext.Provider>
         <Add/>
      </InventoryContext.Provider>
    </div>
  );
}

export default App;
