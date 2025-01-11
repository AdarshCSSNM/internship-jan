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

import React, { useState } from 'react'

function File() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    console.log(name);
    console.log("Form submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" name="abc" placeholder="Enter your name" onChange={handleChange}/>
        <label>Password:</label>
        <input type="password" placeholder="Enter your password"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default File




