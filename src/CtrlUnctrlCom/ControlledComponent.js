import React,{useState} from 'react'

const ControlledComponent = () => {
    const [userData, setUserData] = useState({
        fname:"", lname:"", password:""
        
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value= e.target.value;
        setUserData({...userData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData)
    }

  return (
    <div>
        <h1>ControlledComponent</h1>
        <h4>First Name:{userData.fname}</h4>
        <h4>Last Name:{userData.lname}</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" name="fname" placeholder="First Name" value={userData.fname} onChange={handleChange}/><br/>
            <input type="text" name="lname" placeholder="Last Name" value={userData.lname} onChange={handleChange}/><br/>
            <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange}/><br/><br/>
            <button>Sumbit</button>
        </form>
    </div>
  )
}

export default ControlledComponent;





//✅ Controlled Component: - The component which is controlled by React such as form handling, Suppose we have an input field with type=" text" and value="Jonh" property. If I try to change its value, we can't do it because the value "John" behaves like a prop in React so we can't change it because props are read-only and can transfer one component to another but can't change it. If we want to change its value, we can use the defaultValue property like defaultValue="John".But suppose we want to apply validation on its value then we can't do that. To do this we will have to use the event handler( onChange ) and useState() hook
