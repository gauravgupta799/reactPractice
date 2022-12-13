import React,{memo, useMemo} from 'react'

const Child = ({add}) => {
    console.log("Child component " + add)

    const Result = useMemo(()=>{
        let output =0;
        for(let i=0; i < 500; i++){
            output ++;
        }
        return output;
    },[])

    
    // let output =0;
    // for(let i=0; i < 500_000_0000; i++){
    //     output ++;
    // }

  return (
    <div>
        <h2>Child Component: {Result} {add} </h2>
    </div>
  )
}

export default memo(Child)
// export default Child;