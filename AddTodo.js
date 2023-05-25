// import React from "react";
import React, { useState } from "react";

const AddTodo = (props) => {
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    const submit=()=>{

    }
  return (

 
    <div className="container my-3">
        <h3>Add a Todo</h3> 
      <form onSubmit={submit}>
        <div class="mb-3">
          <label for="title" className="form-label">todo title</label>
          <input
            type="text" value={title} onChange={(e)=>setTitle(e.target.value)}
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
            // placeholder="Enter email"
          />
          {/* <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div class="mb-3">
          <label for="desc"  className="form-label">Todo Description</label>
          <input
            type="text"
            class="form-control"  value={desc} onChange={(e)=>setDesc(e.target.value)}
            id="desc"
            // placeholder="Password"
          />
        </div>
        {/* <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="btn btn-primary btn-sm btn-success ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
