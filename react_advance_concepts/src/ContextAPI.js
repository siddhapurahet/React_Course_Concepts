import {React, useState, useContext} from 'react'
import {data} from './data'


const presonContext = React.createContext();
//two components - Provider and Consumer
 

const ContextAPI = () => {

const [people, setpeople] = useState(data);

const removeper  = (id) => {
    setpeople((people) => {
        return people.filter((person) => person.id !== id);
    })
}

    return (
            <presonContext.Provider value={{removeper}}>
                <h1>Propdrilling</h1>
                <List people={people}/>
            </presonContext.Provider>
         
    )

}

const List = ({people}) => {
    return (
    <>
        {people.map((person) => {
            return <Singleperson key={person.id} {...person}
            />
        })}
    </>
    )
}

const Singleperson = ({id, name}) => {
    const {removeper} = useContext(presonContext);
    console.log(data);
    return (
        <div>
            <h4>{name}</h4>
            <button onClick ={() => removeper(id)}>Remove Person</button>
        </div>
        )
}

export default ContextAPI;