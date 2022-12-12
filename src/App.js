import React, {createContext} from 'react';
import './App.css';
import CustomIndex from './CustomHook/Customindex';
import ClassCounterOne from './UseEffect/ClassCounterOne';
import FuncCounterOne from './UseEffect/FuncCounterOne';
import ClassMouse from "./UseEffect/ClassMouse"
import MouseContainer from "./UseEffect/MouseContainer";
// import ClickCounter from './HOC/ClickCounter';
// import HoverCounter from './HOC/HoverCounter';
// import Portal from './PortalDemo/Portal';
// import FRParentInput from './ForwardRef/FRParentInput';
// import ParentCom from './PureComp/ParentCom';
// import ChildA from "./Components/ChildA";
// import UseCallback from './UseCallback';
// import UseMemo from "./UseMemo";
// import UseRef from "./UseRef";
// import UseReducer from "./UseReducer";
// import UseEffect from './UseEffect';
// import ControlledComponent from './ControlledComponent';
// import UncotrolledComponent from './UncotrolledComponent';


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
      {/* <UseCallback /> */}
      {/* <UseRef/> */}
      {/* <UseReducer/> */}
      {/* <UseEffect /> */}
      {/* <ControlledComponent /> */}
      {/* <UncotrolledComponent/> */}
      {/* <ParentCom/> */}
      {/* <FRParentInput/> */}
      {/* <Portal/> */}
      {/* <ClickCounter name="Smith"/> */}
      {/* <HoverCounter name="John"/> */}
      {/* <CustomIndex /> */}
      {/* <ClassCounterOne/> */}
      {/* <FuncCounterOne/> */}
      {/* <ClassMouse/>  */}
     <MouseContainer/> 
    </div>
  );
}

export default App;
export {context1,context2}