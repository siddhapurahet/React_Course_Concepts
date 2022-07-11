import React, { useState } from 'react'

const Usestatecounter = () => {
  
    const[value, setvalue] = useState(0);

    return (
    <div>
        <h1>Counter</h1>
        <h2>{value}</h2>
        <button onClick={() => setvalue(value + 1)}>Increase</button>
        <button onClick={() => setvalue(value - 1)}>Decrease</button>
        <button onClick ={() => setvalue(0)}>Reset</button>
    </div>
  )
}

export default Usestatecounter;