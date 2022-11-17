import React from 'react';
import {context1,context2} from "../App";

const ChildC = () => {
    return (
        <>
        <context1.Consumer>
            {(name)=>{
                    return(
                    <context2.Consumer>
                        {(gender)=>{
                            return(
                                <>
                                   <h2>Name: {name}</h2>
                                   <h2>Gender: {gender}</h2>
                                </>
                            )
                        }}
                    </context2.Consumer>
                    )
                }
            }
        </context1.Consumer>   
        </>
    )
}

export default ChildC
