import React,{useState} from 'react';
import useDocTitle from './useDocTitle';

const DocTitleTwo = () => {
    const [count, setCount] = useState(0);
    useDocTitle(count);
  return (
    <div>
      <button onClick={()=>setCount(count + 2)}>DocTitle Two</button>
    </div>
  )
}

export default DocTitleTwo