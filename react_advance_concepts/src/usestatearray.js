import React, {useState} from 'react';
import {data} from './data.js';

const UsestateArray = () => {

    const[vari, setvari] = useState(data);

    const removeitem =(id) => {
        let temp = vari.filter((singlevar) => singlevar.id !== id);       //for removing a single item.
        setvari(temp);
    };

    return (
    <div>
        {vari.map((singlevar) => {                          // for mapping id and name from each element of array and assigning it to sanglevar
            const {id, name} = singlevar;
    
            return (
                <div key={id} className='data'>
                    <h4 style={{color: '#008000'}}>{name}</h4>
                    <button onClick={() => removeitem(id)}>remove item</button>
                </div>
            )
        })}
        <button className='btn' onClick={() => setvari([])}>Clear items</button>

    </div>
    )
}


export default UsestateArray;