import React, {createContext} from 'react';
import './App.css';
// import ChildA from "./Components/ChildA";
import UseCallback from './UseCallback';
// import UseMemo from "./UseMemo";
import UseRef from "./UseRef";

const context1 = createContext();
const context2 = createContext();
console.log(context1);

function App() {
  const name = "Gaurav Gupta";
  const gender = "Male";
  return (
    <div className="App">
      <context1.Provider value={name}>
        <context2.Provider value={gender}>
          {/* <ChildA/> */}
        </context2.Provider>
      </context1.Provider>
      {/* <UseMemo/> */}
      <UseCallback />
      <UseRef/>
    </div>
  );
}

export default App;
export {context1,context2}