// import React from 'react'

// function File() {
//   let x = "abc";
//   return (
//     <div>
//       {x === "abc" ? <h1>hello</h1> : <h1>hi</h1>}
//     </div>
//   );
// }

// export default File


// import React from 'react'
// import { RxAvatar } from "react-icons/rx";
// function File() {
//   const handleButton= (x,y)=>{
//     console.log("Button clicked",x*y)
//   }
  
//   return (
//     <div>
//       <button onClick={handleButton}>Submit</button>
//       <RxAvatar onClick={()=> handleButton(5,100)}/>
//     </div>
//   )
// }

// export default File

// import React from 'react'
// import MadeGoal from './MadeGoal';
// import MissedGoal from './MissedGoal';

// function File() {
//   const demo= false;

  // if(demo){
  //   return <MadeGoal/>;
  // }
  // return <MissedGoal/>;
  // }
//   return (
//     <div>
//       {demo ? <MadeGoal/> : <MissedGoal/>}
//     </div>
//   );
// }
// export default File

// import React from 'react'
// let x = ["bmw", "audi", "benz"];
// function File() {
//   return (
//     <div>
//      {x.map((car)=>(
//        <li>{car}</li>
//      ))}
//     </div>
//   )
// }

// export default File

// import React from 'react'
// const cars =["bmw", "audi", "benz"];
// function File() {
//   return (
//     <div>
//       {cars.map((car,i)=>(
//         <li key={i}>{car}</li>
//       ))}
//     </div>
//   )
// }

// export default File

// import React, { useState } from 'react'
// // import './App.css';
// // import Style from './File.module.css';

// function File() {
//   const [name, setName] = useState('');
  

//   const handleChange = (e) => {
//     setName(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("name", name);
//     console.log(name);
//     console.log("Form submitted");
//   }

//   const mystyle = {
//     color: "green",
//     backgroundColor: "black",
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1 style={{color: "red"}}>Form</h1>
//         <h2 className="new">form2</h2>
//         <h3 style={mystyle}>form3</h3>
//         <h4 className={Style.new}>form4</h4>
//         <label>name:</label>
//         <input type="text" name="abc" placeholder="Enter your name" onChange={handleChange}/>
//         <label>Password:</label>
//         <input type="password" placeholder="Enter your password"/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default File

// import React from 'react'
// import { useState } from 'react'

// function File() {
//   const [color, setColor] = useState("red");
//   const handleButton = () => {
//     setColor("blue");
//   }
//   return (
//     <div>
//       <h1>{color}</h1>
//       <button onClick={handleButton}>Change color</button>
//     </div>
//   )
// }

// export default File

// import React from 'react'
// import { useState } from 'react'

// function File() {
//   const [count,setCount] = useState(0);
//   const handleButton =()=>{
//     setCount(count+1);
//   }
//   const handleButton2 =()=>{
//     setCount(count-1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleButton}>increase</button>
//       <button onClick={handleButton2}>decrease</button>
//     </div>
//   )
// }

// export default File

// import React, { useState } from 'react';
// import './index.css';

// function File() {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState('');

//   function multiply() {
//     setResult(parseInt(num1) * parseInt(num2));
//   }

//   function divide() {
//     setResult(parseInt(num1) / parseInt(num2));
//   }

//   function add() {
//     setResult(parseInt(num1) + parseInt(num2));
//   }

//   function subtract() {
//     setResult(parseInt(num1) - parseInt(num2));
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 lg:hidden ">
//       <div className="bg-white p-8 rounded shadow-md w-80">
//         <h1 className="text-2xl font-bold mb-4 text-center">Calculator</h1>
//         <input
//           type="text"
//           value={num1}
//           onChange={(e) => setNum1(e.target.value)}
//           placeholder="Enter first number"
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="text"
//           value={num2}
//           onChange={(e) => setNum2(e.target.value)}
//           placeholder="Enter second number"
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <div className="flex justify-between mb-4">
//           <button onClick={add} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
//           <button onClick={subtract} className="bg-blue-500 text-white px-4 py-2 rounded">Subtract</button>
//         </div>
//         <div className="flex justify-between mb-4">
//           <button onClick={multiply} className="bg-blue-500 text-white px-4 py-2 rounded">Multiply</button>
//           <button onClick={divide} className="bg-blue-500 text-white px-4 py-2 rounded">Divide</button>
//         </div>
//         <h1 className="text-xl font-bold text-center">Result: {result}</h1>
//       </div>
//     </div>
//   );
// }

// export default File;

