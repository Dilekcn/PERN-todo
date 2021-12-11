import React, {Fragment, useState, useEffect} from 'react'
import EditTodo from './EditTodo';

function ListTodos() {
    const [todos, setTodos] = useState([]);


    //delete
    const deleteTodo =async (id) =>{

        try {
            const deletTodo = await fetch(`http://localhost:5005/todos/${id}`,{
                method:'DELETE'
            })
          setTodos(todos.filter(todo =>todo.todo_id !==id))
        } catch (err) {
            console.error(err.message)
            
        }
    }

    const ListTodos = async () =>{
        try {
            const response = await fetch('http://localhost:5005/todos')
            const jsonData = await response.json();
            setTodos(jsonData)

        } catch (err) {
            console.error(err.message);
            
        }
    }

    useEffect(() =>{
        ListTodos();
    },[])

    return (
        <Fragment>
         <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {todos.map((todo,i) => (
        <tr key={i}>
        <td>{todo.description}</td>
        <EditTodo todo={todo}/>
        <td><button className='btn btn-danger' onClick={() =>deleteTodo(todo.todo_id)}>Delete</button></td>
        
      </tr>
  ))} 
    
  </tbody>
</table>
        </Fragment>
    )
}

export default ListTodos
