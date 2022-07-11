import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users';

const Useeffectexmple = () => {
  
    const [user, setuser] = useState([]); 

    const getuser = async() => {
        const response = await fetch(url);
        const user = await response.json();
        setuser(user);
    }

    useEffect(() => {
        getuser();
    }, []);

    return (
    <>
        <h1>Github Users</h1>
        <ul>
            {user.map((singleuser) => {
                const {id, login, avatar_url, html_url} = singleuser;
                return (
                    <li key={id}>
                        <img src={avatar_url} alt={login}></img>
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Useeffectexmple;