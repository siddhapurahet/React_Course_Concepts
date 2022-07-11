// import {React, useState} from 'react'
// import {data} from './data'


// const Propdrilling = () => {

// const [people, setpeople] = useState(data);

// const removeper  = (id) => {
//     setpeople((people) => {
//         return people.filter((person) => person.id !== id);
//     })
// }

//     return <section>
//          <h1>Propdrilling</h1>
//          <List people={people} removeper={removeper}/>
//     </section>

// }

// const List = ({people, removeper}) => {
//     return (
//     <>
//         {people.map((person) => {
//             return <Singleperson key={person.id} {...person}
//             removeper={removeper}/>
//         })}
//     </>
//     )
// }

// const Singleperson = ({id, name, removeper}) => {
//     return (
//         <div>
//             <h4>{name}</h4>
//             <button onClick ={() => removeper(id)}>Remove Person</button>
//         </div>
//         )
// }

// export default Propdrilling;