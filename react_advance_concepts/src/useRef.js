import React, { useRef } from 'react'

const UseRef = () => {                 //useRef will not re render.

const refcontent = useRef('');

const handler = (e) => {
    e.preventDefault();
     console.log(refcontent.current.value);
}
console.log(refcontent);

  return (
    <>
        <form onSubmit={handler}>
            <div> 
                <input type='text' ref={refcontent}/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default UseRef;