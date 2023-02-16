import React, { createContext } from "react";
import "./App.css";
import CustomIndex from "./CustomHook/Customindex";
import ClassCounterOne from "./UseEffect/ClassCounterOne";
import FuncCounterOne from "./UseEffect/FuncCounterOne";
import ClassMouse from "./UseEffect/ClassMouse";
import MouseContainer from "./UseEffect/MouseContainer";
import IntervalClassCounter from "./UseEffect/IntervalClassCounter";
import IntervalHookCounter from "./UseEffect/IntervalHookCounter";
import UseReducer from "./UseReducer/UseReducer";
// import UseReducerObj from './UseReducer/UseReducerObj';
// import ClickCounter from './HOC/ClickCounter';
// import HoverCounter from './HOC/HoverCounter';
import Portal from "./PortalDemo/Portal";
// import FRParentInput from './ForwardRef/FRParentInput';
// import ParentCom from './PureComp/ParentCom';
// import ChildA from "./Components/ChildA";
// import UseCallback from './UseCallback/UseCallback';
import ParentUCB from "./UseCallback/ParentUCB";
import UseMemo from "./UseMemoHook/UseMemo";
import CounterMemo from "./UseMemoHook/CounterMemo";
import UseRef from "./UseRefHook/UseRef";
import ClassTimer from "./UseRefHook/ClassTimer";
import HookTimer from "./UseRefHook/HookTimer";
import Index from "./Pages/Index";
import Pagination from "./Components/Pagination/Pagination";
import ImageList from "./Components/ImageList/ImageList";
import Search from "./Components/SearchFunc/Search";
import Radios from "./Components/RadiosFun/Radios";
import PortalFunCom from "./PortalDemo/PortalFunCom";
import ToolMain from "./PortalDemo/Tooltip/TooltipMain";
import UseEffect from './UseEffect/UseEffect';
// import ControlledComponent from './CtrlUnctrlCom/ControlledComponent';
// import UncotrolledComponent from './CtrlUnctrlCom/UncotrolledComponent';
import UseState from "./UseStateHook/UseState.js";
import Navbar from "./Components/ResponsiveNav/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

const context1 = createContext();
const context2 = createContext();
// console.log(context1);

function App() {
	const name = "Gaurav Gupta";
	const gender = "Male";
	return (
		<div>
			<context1.Provider value={name}>
				<context2.Provider value={gender}>{/* <ChildA/> */}</context2.Provider>
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
			{/* <Pagination/> */}
			{/* <ImageList/> */}
			{/* <Search/> */}
			{/* <Radios/> */}
			{/* <PortalFunCom/> */}
			{/* <ToolMain/> */}
			{/* <UseState /> */}
			{/* <Navbar/> */}
			{/* <Sidebar/> */}
		</div>
	);
}
export default App;