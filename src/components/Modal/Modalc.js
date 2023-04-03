import React, { useState } from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
function Modalc({setOpen, open, api}) {
    const [username , setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [number , setNumber] = useState('')
    const [image , setImage] = useState({})
    const handleEditsave =(e) =>{
         e.preventDefault()
        const form  = new FormData()
        form.append('name' , username)
        form.append('address' ,address)
        form.append('phone_number' , number)
        form.append('image' , image)
        http.post(`${api}` , form).then((res) =>{
             if(res.status === 201) {
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
           <input value={address}  onChange={ (e) =>setAddress(e.target.value)} className='form-control my-2' type="address" placeholder='eter your address' />
           <input value={number} onChange={ (e) =>setNumber(e.target.value)} className='form-control my-2' type="number" placeholder='eter your Phone number' />
           <input className='mb-2' onChange={(e) => setImage(e.target.files[0])} type="file"  placeholder='choose your image'/>
        </form>
        <button className='btn btn-info' form='formtt'>Save</button>
      </ReactModal>
    </div>
  )
}

export default Modalc