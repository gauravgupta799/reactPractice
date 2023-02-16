import React, {useState , useEffect} from 'react';

const url = "https://dummyjson.com/users";

const SelectFilter = () => {
    const [users , setUsers] = useState([]);
    const [filterData , setFilterData] = useState([]);
    const [ val , setVal] = useState(30)
    
    useEffect(()=>{
        async function fetchUsers(){
            const res = await fetch(url);
            const data = await res.json();
            setUsers(data.users);
            setFilterData(data.users)
        }
        fetchUsers()
    },[])

    useEffect(() =>{
        if(val === 30){
            setUsers(filterData)
        }else{
            setUsers(filterData.slice(0, val)) 
        }
    },[val,setUsers,filterData])


  return (
    <div className="ml-3">
    <table className="table-auto">
        <thead>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
        <select onChange={(e)=> setVal(e.target.value)}>
            {
                [5,10,15,20,30].map(option=> <option value={option}>{option}</option>)
            }
        </select>
           {
            users.map((user)=>{
                return(
                    <>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.username}</td>
                        </tr>
                    </>
                )
            })
           }
        </tbody>
    </table>

    </div>
  )
}

export default SelectFilter