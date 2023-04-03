import React, { useState } from 'react'
import http from '../../axios'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const [username, setUsername] =useState('')
    const [password , setPasswod]= useState('')
    const [password2 ,setPasswod2] = useState('')
    const [image ,setImage] = useState({})
    const handleSubmit =(e) =>{
     e.preventDefault()
      const form = new FormData()
      form.append('username' , username)
      form.append('password', password)
      form.append('password2', password2)
      form.append('image' ,image)
      http.post('/register/' ,form).then((res) =>{
        console.log(res);
      })
      navigate('/login')
    }
  return (
    <div className='container mt-3 '>
         <div className=' d-flex justify-content-center mt-5 '>
            <div className="col-md-4  register">
                <h2 className='mb-4 text-center'>Register</h2>
                <form onSubmit={handleSubmit} >
                 <input onChange={(e) => setUsername(e.target.value)} className='form-control mb-2'  type="text" placeholder='enter your username' />
                 <input onChange={(e) => setPasswod(e.target.value)} className='form-control mb-2'  type="password" placeholder='enter your password' />
                 <input onChange={(e) => setPasswod2(e.target.value)} className='form-control mb-3'  type="password" placeholder='repeat your password' />
                 <label className='mb-4  mx-auto d-block '>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file"  className='w-0 h-0 overflow-hidden file-input' />
                     <span className='pointer' >chose your image</span>
                     <svg className='mx-3 pointer cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                     <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                     <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                     </svg>
                 </label>
                 <button  className='btn btn-success d-block mx-auto'>Submit</button>
                </form>
            </div>
         </div>
    </div>
  )
}

export default Register