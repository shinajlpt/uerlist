
import axios from "axios";
import { Userlist  } from "./components/Userlist";
import { useState, useEffect } from "react";

function App() {
    const [userList,setUserList] = useState([])

    const fetchData = async ()=>{
      const response = await axios('https://jsonplaceholder.typicode.com/users')
      setUserList(response.data)
    }
    useEffect(()=>{
      fetchData()
      
    },[])
  const deleteUser =(id)=>{
    setUserList(userList.filter((list)=> list.id !== id))
  }
    
    return (
      <div>
        <Userlist userList={userList} deleteUser={deleteUser}/>
      </div>
    )
  }

export default App;
