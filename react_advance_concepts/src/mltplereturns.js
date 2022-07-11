import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';

const Mltplereturns = () => {
  
    const [isloading, setisloading] = useState(true);
    const [iserror, setiserror] = useState(false);
    const [user, setuser] = useState('default user'); 

    useEffect(() => {
        setisloading(true);
        fetch(url)
         .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json()
            }
            else{
                setiserror(true);
                setisloading(false);
                throw new Error(resp.statusText);
            }
         })


         .then((user) => { 
            const {login} = user;
            setuser(login);
            setisloading(false);
         })
        .catch((error) => console.log(error));
    }, []);

    if(isloading){
        return <h2>Loading...</h2>
    }

    if(iserror){
        return <h2>Error...</h2>
    }

    if(user){
        return <h2>Got the User </h2>
    }

    return <h2>Sorry...</h2>
}

export default Mltplereturns;