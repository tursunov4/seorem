import React, { useEffect, useState } from 'react'
import http from '../../axios';
import EditModalc from '../EditModal/EditModalc';
import Modalc from '../Modal/Modalc';
function Clients() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [item, setItem] = useState({})
    const [state ,setState]  = useState([])
    
    useEffect(() =>{
        http.get('/clients/' ).then((res)=>{
         setState(res.data)
        }).catch((err) =>{
            console.log(err)
        })
    },[])
    console.log(state);
    const deletedUser =(id) =>{
     http.delete(`/clients/${id}`).then((res) =>{
        console.log(res);
     }).catch((err) =>{
        console.log(err)
     })
    setTimeout(() =>{
        window.location.reload()
    } , 1000)
    }
    const editUser =(item) =>{
        setItem(item)
        setOpen2(true)
    }
 
  return (
    <div>
        <EditModalc item={item} api={'/clients/'} open={open2} setOpen={setOpen2}/>
        <Modalc api={'/clients/'} open={open} setOpen={setOpen}/>
        <div>
        <button onClick={() => setOpen(true)} className='btn btn-info mt-5 d-block mx-auto'>ADD CLIENTS</button>
        </div>
         <div className='col-md-10 mt-5 mx-auto'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Image</th>      
                        <th>Actions</th>                  
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((item, index) =>(
                            <tr key={index}>
                                <td>{index +1}</td>
                                <td>{item.name}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.address}</td>
                                <td><img src={item.image} alt="suppliers" width={20} height={20} /></td>
                                <td><button onClick={ ()=>deletedUser(item.id)} className='btn btn-danger'>Delet</button> <button onClick={() => editUser(item)} className='btn btn-success'>edit</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
    </div>
  )
}

export default Clients