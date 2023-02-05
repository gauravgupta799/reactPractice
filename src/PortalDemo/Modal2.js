import React, { } from "react";
import ReactDOM,{createPortal} from "react-dom";
import "./Styles.css";

const modalRoot = document.getElementById("modal-root");


function Modal2({children,hideModal}){
    return createPortal(
        <div className ="modalContainer">
            <div className="innerWrapper">
               {children}            
                <hr />
                <button onClick={hideModal}>Close</button>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal2;
