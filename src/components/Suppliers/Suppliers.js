import React, { useEffect, useState } from 'react'
import http from '../../axios';
import Modal from '../Modal/Modal';
import EditModal from '../EditModal/EditModal';
function Suppliers() {
    const [item , setItem] = useState({})
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [state ,setState]  = useState([])
    
    useEffect(() =>{
        http.get('/suppliers' ).then((res)=>{
         setState(res.data)
        }).catch((err) =>{
            console.log(err)
        })
    },[])
    console.log(state);
    const deletedUser =(id) =>{
     http.delete(`/suppliers/${id}`).then((res) =>{
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
        <Modal  api={'/suppliers/'} open={open} setOpen={setOpen}/>
        <EditModal item={item} api={'/suppliers/'} open={open2} setOpen={setOpen2}/>
      
        <div>
        <button onClick={() => setOpen(true)} className='btn btn-info mt-5 d-block mx-auto'>ADD SUPPLIERS</button>
        </div>
         <div className='col-md-10 mt-5 mx-auto'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Firsname</th>
                        <th>Lastname</th>
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
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
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

export default Suppliers