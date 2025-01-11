import React from 'react'
import Child from './Child';

function Test1() {
    console.log("hi");
    
    return (
        <div>           
            <Child value="abc"/>
        </div>
    )
}

export default Test1
