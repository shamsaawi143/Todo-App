import { use, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [todoUpdate, setTodoUpdate] = useState([])
  const handleDelete = (id) => {
        const newTodo = todo.filter((t) => t._id !== id)
        setTodo(newTodo)
        setSuccess('Task Deleted Successfully')
        setTimeout(() => {
        setSuccess('')
      },5000)
  }
  console.log(todo);
  const handleComplete = (item) => {
    const newTodo = todo.filter((t) => t._id !== item._id )
    newTodo.push({_id: item._id, text: item.text, completed: 'true'})
    setTodo(newTodo)
     setSuccess('Task completed Successfully')
        setTimeout(() => {
        setSuccess('')
      },5000)
  }

  const handleUpdate = item =>{
    setText(item.text)
    setTodoUpdate(item)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return setError("Todo is Required");
        }
      // Get old filtered TODO
      if(todoUpdate && todoUpdate._id){
        const getFilteredOldTodo = todo.filter(old => old._id !== todoUpdate._id)
        // Add New Updated TODO to the state
        getFilteredOldTodo.unshift({
          _id: todoUpdate._id, text, completed: todoUpdate.completed
        })
        setTodo(getFilteredOldTodo)
        setSuccess("Task Updated Successfully");
      setTimeout(() => {
        setSuccess('')
      },5000);
      setTimeout(() => {
        setError('')
      },5000)
      setText('')
      setTodoUpdate([])
    
    } else {
      // Add New Todo to State
      todo.unshift({ _id: Date.now(), text, completed: false });
      setTodo(todo);
      setText("");
      setError("");
      setSuccess("New Task Added Successfully");
      setTimeout(() => {
        setSuccess('')
      },5000);
      setTimeout(() => {
        setError('')
      },5000)
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-light">
      <div className="row">
        <div className="bg-dark text-light shadow-lg p-5">
          <div className="col-lg-8 w-100 col-md-8 col-sm-10 col-12">
            <div className="mb-3">
              <h3 className="display-6 text-center">Todo List Manager Aap</h3>{" "}
              <hr></hr>
              <div className="text-danger text-center fw-lighter">{error}</div>
              <div className="text-success text-center fw-lighter">{success }</div>
            </div>
            <TodoInput
              text={text}
              setText={setText}
              handleSubmit={handleSubmit}
            />
          </div>
          <TodoList todo={todo} handleDelete={handleDelete} handleComplete={handleComplete} handleUpdate={handleUpdate}/>
        </div>
      </div>
    </div>
  );
};

export default Todo;
