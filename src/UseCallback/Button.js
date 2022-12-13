import React from 'react'

const Button = ({children,handleIncrement}) => {
    console.log(`Buton rendered: ${children}`);
    return (
        <div>
            <button onClick={handleIncrement}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
