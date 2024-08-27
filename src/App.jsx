// import { Linter } from 'eslint';
import React, { useState } from 'react';




function App(){
    const [text , settext]=useState('');
    const [todo , settodo]=useState([]);
    function addtodo (event){
        event.preventDefault();
        console.log(text);
        todo.push(text)
       settodo([...todo ])
      console.log(todo);
          
        settext('')
        }
        const deleteTodo =(index)=>{
            console.log( 'todo delete', index);
            todo.splice(index,1);
           settodo([...todo]);            

        }
        const editTodo =(index)=>{
            console.log( 'todo edit', index);
            const editvalue = prompt('enter your value')
            todo.splice(index,1, editvalue);
           settodo([...todo]);            

        }



    return(
        <>
        <h1>todo app {text}</h1>
        <form onSubmit={addtodo}> 
            <input type="text" placeholder="enter your text"value={text} 
            onChange={(event)=>settext(event.target.value)}
            />
            
            <button type="submit">addtodo</button>
        </form>
        <ul>
            {todo.length > 0 ? (todo.map ((item , index)=>(
            
            <li key={index}>{item}
            
            <button onClick= {()=> deleteTodo(index) }>delete</button>
            <button onClick= {()=> editTodo(index) }>edit</button>
           
            
            </li>
            ))
        ):( <p> no todos found !</p>
        )}   
        </ul>
          
        </>
        
    );
}
 export default App;