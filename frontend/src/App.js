import { Provider } from "react-redux";
import {store} from "./redux/store";

import {BrowserRouter, Routes, Route} from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

// CSS
import './App.css';

function App() {

  return (
    <Provider store={store}>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="" element={<Home />}></Route>
          
          <Route path="todo" element={

            <div className="container">
              <h1 className="text-center fw-bolder mt-5 mb-5 text-primary">To Do App</h1>
              <div className="row justify-content-center mb-5">
                <div className="col-lg-6">
                  <TodoForm />
                  <TodoList />
                </div>
              </div>
            </div>

          }>
          </Route>

          <Route path="notes" element={
            <div className="container">

              <h1 className="text-center fw-bolder mt-5 mb-5 text-primary">Notes App</h1>
              <div className="row justify-content-center mb-5">
                <div className="col-lg-6">
                  <NoteForm />
                  <NoteList />
                </div>
              </div>
            
            </div>
          }>
          </Route>


        </Routes>
      
      </BrowserRouter>
    </Provider>
  );
}

export default App;