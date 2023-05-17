import './Userlist.css'

export const Userlist=({userList,deleteUser})=> {
    
  return (
    <div className='main_div'>
              <table>
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {userList.map((data)=>{
             return( <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td id='thirdtd'><button onClick={() => deleteUser(data.id)}>Delete</button></td>
            </tr>)
            })}
          </tbody>     
        
      </table>
    </div>
  )
}
