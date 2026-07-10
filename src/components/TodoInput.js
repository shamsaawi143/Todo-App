import { FaPlusCircle } from "react-icons/fa";

const TodoInput = ({ text, setText,handleSubmit }) => {
  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control border-0 shadow-none"
          placeholder="Add New Taska"
          autoFocus
        />
        <button className="input-group-text border-0 shadow-none btn btn-light">
          <FaPlusCircle size={28}
  color="#5b3df5" />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
