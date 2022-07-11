/*import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; // "./" means file is in the same folder. here it is in src.


//function name start from capital letter.

const values = {
   image : 'https://cdn.lifehack.org/wp-content/uploads/2015/03/Hobbit_book.jpg',
   title : 'The hobbit',
   year : '2001'
}

const values2 = {
   title : 'The Famous Five',
   img : 'https://images-na.ssl-images-amazon.com/images/I/91TSWWb8qfL.jpg',
   year : '1968'
}

function India() {   //When returning something use "{}" bracket otherwise use "()" bracket.
  return (
    <section className='myindia'>

       <Indiainfo 
          title = {values2.title}
          img = {values2.img}
          year = {values2.year}/>


        <Indiainfo 
          title = {values.title}
          img = {values.img}
          year = {values.year}/>
           
     </section>
  )
}

const handler = () => {   
  alert("How are you?");
}

const newhandler = (title) => {
  console.log(title);
}

const Indiainfo = (props) => {
  return (
    <section className='ind'> 
      <h2 style ={{color: 'violet'}}> {props.title} </h2> 
      <img style = {{height: '200px', width: '350px'}}src = {props.img} alt = ''/>
      <h3>{props.year}</h3>
      <button type="text" onClick={handler}>Hello!!!</button> 
      {/* licked on hello btton and function called. }
      <button type="text" onClick={() => newhandler(values2.title)}>title</button>
       
  </section>
  )
};

ReactDom.render(<India/>, document.getElementById('root')); needed for executing it to the web page. */




/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

                                             //JUST PRACTISED THE PROPS IN REACT 

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {values} from './books.js'; 
// import {values2}from './books.js'; 
// import {values3} from './books.js'; 


// const values = {
//     img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIF7OEcjeaxRtztClixBnm48SofAvQCrDAChD_E5rpqbgISVTvg9dSdf9MrZxPMr8sxD8&usqp=CAU',
//     nm : 'Taj Mahal',
//     city : 'Agra'
// }

// const values2 = {
//     img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbNoB9qywCsmsITFDsHQcQzDl14uVhtB3wQ&usqp=CAU',
//     nm : 'Mathura Temple',
//     city : 'Mathura - UP'
// }

// const values3 = {
//     img : 'https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1618085939357.jpg-org',
//     nm : 'Somnath',
//     city : 'Gujarat'
// }

function India() {
  return (
    <div className = 'sep'>
      <Display
        id = {values.id}
        img = {values.img}
        nm = {values.nm}
        city = {values.city}/>

      {/* <Display
        img = {values2.img}
        nm = {values2.nm}
        city = {values2.city}/>

      <Display
        img = {values3.img}
        nm = {values3.nm}
        city = {values3.city}/> */}
    </div>
  )
}

const Display = (props) => {
  return (
    <div className = 'align'>
      <h2>{props.id}</h2>
      <img style = {{height:'200px', width:'400px', margin: 'right'}}src = {props.img} alt = ''/>
      <h2 style = {{color: '#E75480'}}>{props.nm}</h2>
      <h3 style = {{color: '#8B8000'}}>{props.city}</h3>
    </div>

  )
}

ReactDom.render(<India/>, document.getElementById('root'));
