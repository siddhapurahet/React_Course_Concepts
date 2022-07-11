import React, { useState } from 'react'

const Usestateobject = () => {

    const [message, setmessage] = useState({
        name: 'King', 
        message: "hello"});

    const changemsg = () => {
        setmessage({...message, message: "Hi!!!"});     //Logic for changong single value from an array
    }                                                   //...message means ignore other fields and only change message field from the array.
                                                        //not writing ... means other fields will be vanished when function runs in the browser.
  return (
    <>
        <h3>{message.name}</h3>
        <h4>{message.message}</h4>
        <button onClick={changemsg}>Change message field</button>
    </>
    )
}

export default Usestateobject