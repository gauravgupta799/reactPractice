import React,{useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const ParentUCB = () => {
    const [age , setAge] = useState(25);
    const[salary, setSalary] = useState(5000000);

    const incrementAge= useCallback(() => {
           setAge(age + 1)
    },[age]);

    const incrementSalary = useCallback(() => {
      setSalary(salary + 100000);
    },[salary]);
    
  return (
    <div>
      <Title/>
      <Count text= "Age" count={age}/>
      <Button handleIncrement={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary}/>
      <Button  handleIncrement={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentUCB;
