import React, { useState } from 'react'
import http from '../../axios'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const [username, setUsername] =useState('')
    const [password , setPasswod]= useState('')
    const [password2 ,setPasswod2] = useState('')

    const handleSubmit =(e) =>{
     e.preventDefault()
      const form = new FormData()
      form.append('username' , username)
      form.append('password', password)
      form.append('password2', password2)

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

                 <button  className='btn btn-success d-block mx-auto'>Submit</button>
                </form>
            </div>
         </div>
    </div>
  )
}

export default Register