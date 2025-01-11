 import React from 'react'
 import { Link, useNavigate } from 'react-router-dom'
 function Home() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/Contact');
    }
   return (
     <div>
       <h1>Home</h1>
       <ul>
        <li>
       <Link to="/Contact">Contact</Link>
         </li>
         <li>
         <Link to="/Blogs">Blogs</Link>
         </li>
         </ul>
         <button onClick={handleNavigate}>next page</button>
     </div>
   )
 }
 
 export default Home
 