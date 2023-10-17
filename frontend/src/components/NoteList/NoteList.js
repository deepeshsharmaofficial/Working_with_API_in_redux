import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
  const notes= useSelector(noteSelector);
  const dispatch = useDispatch();

  return (
    <>
    <ol className="list-group list-group-numbered">
      {notes.map((note, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">

          <div class="ms-2 me-auto">
            <div>
              <span>{note.text}</span>
            </div>
            <span className='badge bg-success rounded-pill mt-2'>{note.createdOn}</span>
          </div>
        
          <button className="btn btn-danger" onClick={() => dispatch(actions.delete(index))}>Delete</button>
        </li>
      ))}
    </ol>
    </>
  );
}

export default NoteList;