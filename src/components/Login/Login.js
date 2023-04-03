// import React, { useState } from 'react'
// import {  useNavigate } from 'react-router-dom'
// import http from '../../axios'

// function Login() {
//     const navigate = useNavigate()
//     const [username , setUsername] = useState('')
//     const [password , setPasswod] = useState('')
//     const [token ,setToken] = useState
//    const handleSubmit =(e) =>{
//     e.preventDefault() 
//      http.post('/login/' ,{
//         username:username,
//         password:password
//      }).then((res) =>{
//         console.log(res);
//         if(res.status === 200){
//             navigate('/mainpage')
//             // setToken(res.data.access_token)
//         }
//      }).catch((err) =>{
//         if(err.response.status ===403) {
//             alert('hatolik bor')
//         }
//      })
//    }
// //    window.localStorage.setItem('token' ,token)
//   return (
//     <div className='container mt-3 '>
//     <div className=' d-flex justify-content-center mt-5 '>
//        <div className="col-md-4  register">
//            <h2 className='mb-4 text-center'>Login</h2>
//            <form id='form' onSubmit={handleSubmit} >
//             <input onChange={(e) => setUsername(e.target.value)} className='form-control mb-2'  type="text" placeholder='enter your username' />
//             <input onChange={(e) => setPasswod(e.target.value)} className='form-control mb-2'  type="password" placeholder='enter your password' />
//             <button form='form' className='btn btn-success d-block mx-auto'>Submit</button>
//            </form>
//        </div>
//     </div>
// </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import http from '../../axios'


function Login() {
    const navigate = useNavigate()
        const [username , setUsername] = useState('')
        const [password , setPasswod] = useState('')
       const handleSubmit =(e) =>{
        e.preventDefault() 
         http.post('/login/' ,{
            username:username,
            password:password
         }).then((res) =>{
            window.localStorage.setItem('token' ,res.data.access_token )
            console.log(res.data);
            if(res.status === 200){
                navigate('/mainpage/suppliers')                
            }
         }).catch((err) =>{
            if(err.response.status ===403) {
                alert('hatolik bor')
            }
         })
       }

  return (
    <div className='container mt-3 '>
        <div className=' d-flex justify-content-center mt-5 '>
          <div className="col-md-4  register">
            <h2 className='mb-4 text-center'>Login</h2>
               <form id='form' onSubmit={handleSubmit} >
                <input onChange={(e) => setUsername(e.target.value)} className='form-control mb-2'  type="text" placeholder='enter your username' />
                <input onChange={(e) => setPasswod(e.target.value)} className='form-control mb-2'  type="password" placeholder='enter your password' />
             <button form='form' className='btn btn-success d-block mx-auto'>Submit</button>
            </form>
           </div>
     </div>
    </div>
  )
}

export default Login