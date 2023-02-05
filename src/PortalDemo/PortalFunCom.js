import React, { useState} from "react";
import Modal2 from "./Modal2";

function PortalFunCom(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal =()=>{
        setIsModalOpen(true);
    }
    const hideModal =()=>{
        setIsModalOpen(false);
    }
    return(
        <div style={{
            background:`${isModalOpen ? "rgba(0,0,0,0.5)" : "white"}`,
            height:'100vh',
            width:'100vw'
        }}>
            <h1 style={{color:'black'}}>Portal Example</h1>
            <button onClick={showModal} 
            style={{color:'black',
                padding:'5px 20px',
                fontSize:'1.3rem',
                borderRadius:'5px',
                cursor:'pointer',       
            }}>
            Open Modal
            </button>
            { isModalOpen && (
                <Modal2 hideModal = {hideModal}>
                    <h2 id="heading">This is a modal which has created by
                        using the portal.
                    </h2>
                    <p id="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam et, provident velit nemo aliquid, incidunt porro fuga culpa maiores inventore beatae dolore sunt iure dignissimos reprehenderit rerum molestiae deserunt.
                    </p>
                </Modal2>
                )
            }
        </div>
    )
}

export default PortalFunCom;
