import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import axios from 'axios';

function ToDoList() {
  const todos = useSelector(todoSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:4100/api/todos")
      .then((res) => {
        // handle success
        console.log(res);        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <>
      <ol className="list-group list-group-numbered">
        {todos.map((todo, index) => (          
          <li key={index} className="list-group-item d-flex justify-content-between align-items-start">

            <div class="ms-2 me-auto">
              <div>
                <span>{todo.text}</span>
              </div>
              <span className={todo.completed ? 'badge bg-success rounded-pill':'badge bg-danger rounded-pill'}>{todo.completed ? 'Completed': 'Pending'}</span>

            </div>

            <button className="btn btn-warning" onClick={()=>{dispatch(actions.toggle(index))}} >Toggle</button>
            
          </li>


        ))}
      </ol>
    </>
  );
}

export default ToDoList;
