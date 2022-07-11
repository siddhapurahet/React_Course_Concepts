import {React, useEffect, useState} from 'react'

const Shortcircuit = () => {

    const [show, setshow] = useState(false);

    return (
        <>
            <button onClick = {() => setshow(!show)}>show/hide</button>

            {show && <Item/>}
        </>
    )
}


const Item = () => {

const checksize = () => {
    setsize(window.innerWidth);
}


useEffect(() => {
    window.addEventListener('resize', checksize);
    return () => {
        window.removeEventListener('resize', checksize);
    }

    
}, [])

const [size, setsize] = useState(window.innerWidth);


    return (
        <div>
            <h1>Window size : {size}</h1>
        </div>
    )
}



export default Shortcircuit;


//   const [text, settext] = useState(false);
// //   const firstvalue = text || "Hello";
// //   const secondvalue = text && "Hi";

//     return (
//         <>
//             <h2>Values are</h2>
//             {/* <h3>First value is : {firstvalue}</h3>
//             <h3>Second value is : {secondvalue}</h3> */}
//             <h3>{text}</h3>
//             <button onClick = {() => settext(!text)}>Toggle</button>
//             {/* {text && <h2>Error...</h2>} */}
//             {text ? (
//                 <h3>Error found...</h3>                 
//             ) : (
//                 <h3>Error not found...</h3>
//             )}
//         </>
//   )


