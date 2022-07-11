import React, { useState } from 'react';


const Erroreg = () => {
    
    const [title, setTitle] = useState('Change Title');    //Title of button is defined here and passed as variable in h2 tag

     const handler = () => {
        if(title === 'Change Title'){
            
            setTitle('I am changed');               //use state is used to change the value of title when button is pressed.
        }
        else{
            setTitle('Change Title');
        }
     }

     
    const [tochange, settochange] = useState('Change Me!');
    const handler1 = () => {                                    //Another example of usestate.
        settochange('Done!!!');
    } 

    

    return (
        <div>
            <h1><center>Use State Example of button change</center></h1>
            <h2>{title}</h2> 
            <h5>Press below to change above title</h5>                                              
            <button type="text" onClick={handler}>Button</button>
            <h2>{tochange}</h2>
            <h5>Press below to change above title</h5>                                              
            <button type="text" onClick={handler1}>Button1</button>

        </div>
    )
}

export default Erroreg;