import React,{useState} from 'react';
import useDocTitle from './useDocTitle';

const DocTitleOne = () => {
    const [count, setCount] = useState(0);
    useDocTitle(count);
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>DocTitle One</button>
    </div>
  )
}

export default DocTitleOne