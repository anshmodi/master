import Add from './Component/Add'
import View from './Component/View';
import  InventoryContextProvider  from './Context/InventoryContext';

function App() {
  return (
    <div className="App">
      <InventoryContextProvider>
         <Add/>
         <View/>
      </InventoryContextProvider>
    </div>
  );
}

export default App;
