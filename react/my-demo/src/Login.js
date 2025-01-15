// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState('');
//     const handleLogin = async () => {
//         const payload ={
//             email: email,
//             password: password
//             };
//             try {
//                 const response = await axios.post('https://reqres.in/api/login', payload);
//                 localStorage.setItem('login', response.data.token);
//                 console.log(response);
//                 console.log("success");
//             } catch (error) {
//                 console.log(error);
//                 console.log("Failed");
//             }
//         };
//     return (
//         <div>
//             <h1>Login</h1>
//             <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     )
// }
// export default Login;
