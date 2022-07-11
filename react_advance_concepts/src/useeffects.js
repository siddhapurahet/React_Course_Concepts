import React, {useEffect, useState} from "react";

const Useeffect = () => {
    
    const [value, setvalue] = useState(0);

    useEffect(() => {
        if(value >=1){
            document.title = `New update ${value}`;
        }
    }, [value]);  //Here [value] is the dependency array and it renders everytimr but if this array is 
                  //blank[] then it eill only render initially for the first time.

    const [size, setsize] = useState(window.innerWidth);


    const checksize = () => {
        setsize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checksize);  //checksize is the function made that will check for 
                                                       //the window width for every rendreing and return the latest width.
    })

    return (
        <>
            <h1>Use Effects Examples</h1>
            <h2>{value}</h2>
            <button onClick={() => setvalue(value+1)}>click</button>
            <br></br>
            <h2>Window Width</h2>
            <h3>The Window width is : {size} px</h3>
        </>
    )
}

export default Useeffect;