import React, { useState } from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
function EditModal({setOpen, open, api , item}) {
    const [username , setUsername] = useState(item.username)
    const [firstname , setFirstname] = useState(item.first_name)
    const [lastname , setLastname ] = useState(item.last_name)
    const [age ,setAge]  = useState(item.age)
    const [email, setEmail] = useState(item.email)
    const [address, setAddress] = useState(item.address)
    const [number , setNumber] = useState(item.phone_number)
    console.log(number);

    const handleEditsave =(e) =>{
         e.preventDefault()
        const form  = new FormData()
        form.append('username' , username)
        form.append('age' , age)
        form.append('email' , email)
        form.append('address' ,address)
        form.append('first_name' , firstname)
        form.append('last_name' , lastname)
        form.append('phone_number' , number)
        http.put(`${api}/${item.id}/` , form).then((res) =>{
             if(res.status === 200) {
                window.location.reload()
             }
        }).catch((err) =>{
            console.log(err)
        })
        setOpen(false)
     
    }
  return (
    <div>
         <ReactModal onRequestClose={()=>setOpen(false)} isOpen={open} style ={
        {
          overlay :{
            background: 'rgba(0,0,0,0.4)'
          },
        content:{
         width :"500px",
         padding :'20px',
         margin:"0 auto"
        }
      }    }  
      >
        <form onSubmit={handleEditsave} id='formtt'>
           <input value={username} onChange={ (e) =>setUsername(e.target.value)} className='form-control my-2' type="text" placeholder='eter your username' />
           <input value={firstname} onChange={ (e) =>setFirstname(e.target.value)} className='form-control my-2' type="text" placeholder='eter your firsname' />
           <input value={lastname} onChange={ (e) =>setLastname(e.target.value)} className='form-control my-2' type="text" placeholder='eter your lastname' />
           <input value={age} onChange={ (e) =>setAge(e.target.value)} className='form-control my-2' type="number" placeholder='eter your age' />
           <input value={email} onChange={ (e) =>setEmail(e.target.value)} className='form-control my-2' type="email" placeholder='eter your email' />
           <input value={address}  onChange={ (e) =>setAddress(e.target.value)} className='form-control my-2' type="address" placeholder='eter your address' />
           <input value={number} onChange={ (e) =>setNumber(e.target.value)} className='form-control my-2' type="number" placeholder='eter your Phone number' />
        </form>
        <button className='btn btn-info' form='formtt'>Save</button>
      </ReactModal>
    </div>
  )
}

export default EditModal