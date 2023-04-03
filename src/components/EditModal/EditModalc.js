import React, { useState } from 'react'
import ReactModal from 'react-modal'
import http from '../../axios'
function EditModalc({setOpen,item, open, api}) {
    const [username , setUsername] = useState(item.id)
    const [address, setAddress] = useState(item.address)
    const [number , setNumber] = useState(item.phone_number)
    const [image , setImage] = useState(item.image)

    const handleEditsave =(e) =>{
         e.preventDefault()
        const form  = new FormData()
        form.append('name' , username)
        form.append('address' ,address)
        form.append('phone_number' , number)
        form.append('image' , image )
        http.put(`${api}${item.id}/` , form).then((res) =>{
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
           <input value={address}  onChange={ (e) =>setAddress(e.target.value)} className='form-control my-2' type="address" placeholder='eter your address' />
           <input value={number} onChange={ (e) =>setNumber(e.target.value)} className='form-control my-2' type="number" placeholder='eter your Phone number' />
           <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </form>
        <button className='btn btn-info' form='formtt'>Save</button>
      </ReactModal>
    </div>
  )
}

export default EditModalc