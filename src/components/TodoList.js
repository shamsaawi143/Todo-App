import {  FaCheckCircle, FaEdit, FaTimesCircle } from 'react-icons/fa'

const TodoList = ({todo, handleDelete, handleComplete,handleUpdate}) => {
  return (
    <div className="col-lg-8 w-100 col-md-8 col-sm-10 col-12">
        {todo.length > 0 && todo.map((item) => (
             <div key={item.id} className="d-flex list-zoom justify-content-between p-3 my-2 shodaw-lg">
            <span className={`text-lighter ${item.completed && 'text-decoration-line-through'}`}>{item.text}</span>
            <div className='btn-group'>
              {!item.completed && (
                <>
                   <FaCheckCircle   onClick={() => handleComplete(item)} className='text-success btn-action' />
                <FaEdit onClick={() => handleUpdate(item)} className='text-primary mx-2 btn-action' />
                </>
              )}
               
                <FaTimesCircle onClick={() => handleDelete(item._id)} className='text-danger btn-action' />
            </div>
           </div>
        ))}
        
           </div>
  )
}

export default TodoList
