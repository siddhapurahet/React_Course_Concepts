import React, { useState } from 'react'

const Controlledinput = () => {

const [firstname, setfirstname] = useState('');
const [email, setemail] = useState(''); 
const [newperson, setnewperson] = useState([]);


const handleevent = (e) => {
    e.preventDefault();   
    if(firstname && email){
        const person = {firstname, email};
        setnewperson((newperson) => {
            return [...newperson, person];
        });
        setfirstname('');
        setemail('');
    }
    else{
        console.log("sorry... empty values");
    }
} 

  return (
    <article>
        <form>
            <div>
                <label htmlFor="firstname">Name : </label>
                <input 
                type="text" 
                id="firstname"  
                name ="firstname"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label htmlFor="email">Email : </label>
                <input 
                type="text" 
                id="email" 
                name ="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}/>
   
            </div>
            <br></br>
            <button type="submit" onSubmit={handleevent}>Add Person</button>
        </form>
        {newperson.map((singleperson, index) => {
                const {firstname, email} = singleperson;
                return (
                <div>
                    <h4>{firstname}</h4>
                    <p>{email}</p>
                    {/* key={index} */}
                </div>
                )
            })
        }
    </article>
    
  )
}

export default Controlledinput;
