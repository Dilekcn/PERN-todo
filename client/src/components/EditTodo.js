import React, { Fragment, useState, useEffect } from "react";

function EditTodo({ todo }) {

    const [description, setDescription] = useState(todo.description)
 //edit description function
 const updateDescription = async e =>{
     e.preventDefault();
     const body = {description}
     const response = await fetch(`http://localhost:5005/todos/${todo.todo_id}`,{
        method:'PUT',
        headers:{ 'Content-Type': 'application/json'},
        body:JSON.stringify(body)
       
     })
     window.location = '/';
     try {
         
     } catch (err) {
         console.error(err.message);
         
     }
 }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning bg-warning text-white mt-1" 
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
       Edit
      </button>

      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Edit Todo
              </h5>
              
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() =>setDescription(todo.description)}
              ></button>
            </div>
            <div className="modal-body">
                <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="modal-footer">
           
              <button type="button" className="btn btn-warning text-white" onClick={e => updateDescription(e)}>
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
