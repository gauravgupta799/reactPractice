import React, {createContext} from 'react';
import './App.css';
import CustomIndex from './CustomHook/Customindex';
import ClassCounterOne from './UseEffect/ClassCounterOne';
import FuncCounterOne from './UseEffect/FuncCounterOne';
import ClassMouse from "./UseEffect/ClassMouse"
import MouseContainer from "./UseEffect/MouseContainer";
import IntervalClassCounter from './UseEffect/IntervalClassCounter';
import IntervalHookCounter from './UseEffect/IntervalHookCounter';
import UseReducer from './UseReducer/UseReducer';
// import UseReducerObj from './UseReducer/UseReducerObj';
// import ClickCounter from './HOC/ClickCounter';
// import HoverCounter from './HOC/HoverCounter';
// import Portal from './PortalDemo/Portal';
// import FRParentInput from './ForwardRef/FRParentInput';
// import ParentCom from './PureComp/ParentCom';
// import ChildA from "./Components/ChildA";
// import UseCallback from './UseCallback/UseCallback';
import ParentUCB from './UseCallback/ParentUCB';
import UseMemo from "./UseMemoHook/UseMemo";
import CounterMemo from './UseMemoHook/CounterMemo';
import UseRef from "./UseRefHook/UseRef";
import ClassTimer from './UseRefHook/ClassTimer';
import HookTimer from './UseRefHook/HookTimer';
import Index from './Pages/Index';
// import UseEffect from './UseEffect/UseEffect';
// import ControlledComponent from './CtrlUnctrlCom/ControlledComponent';
// import UncotrolledComponent from './CtrlUnctrlCom/UncotrolledComponent';


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
     {/* <MouseContainer/>  */}
     {/* <IntervalClassCounter/> */}
     {/* <IntervalHookCounter/> */}
     {/* <UseReducerObj/> */}
     {/* <ParentUCB/> */}
     {/* <CounterMemo/> */}
      {/* <ClassTimer/> */}
      {/* <HookTimer/> */}
      <Index/>
    </div>
  );
}

export default App;
export {context1,context2}