import {React, useState, useReducer} from 'react'
import Modal from './modal.js'
import {data} from './data.js'

const UseReducer = () => {

const reducer = (state, action) => {
    if(action.type === 'Add_Item'){
        const newitems = [...state.people, action.payload]
        return {
            ...state, 
            people:data, 
            isModalOpen:true, 
            modalContent:'item added'
        }
    }
    throw new Error('no matching action type');
};

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}

const [name, setname] = useState('');
const [state, dispatch] = useReducer(reducer, defaultState);

const handler = (e) => {
    e.preventDefault();
    if(name){
        const newitem = {id: new Date().getTime().toString(), name}
        dispatch({type:'Add_Item', payload: newitem});
    } 
    else{
        dispatch({type:'Random'});
    }
};

  return (
    <>
        {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
        <form onSubmit={handler}>
            <div>
                <input type='text' 
                value={name} 
                onChange={(e) => setname(e.target.value)}/>
            </div>
            <button type='submit'> Add</button>
        </form>
        {state.people.map((singleperson) => {
            return (
                <div key={singleperson.id}>
                    <h4>{singleperson.name}</h4>
                </div>
            )
        })}
    </>
  )
}

export default UseReducer;