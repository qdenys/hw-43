import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './features/todos/todosSlice';
import ToDoList from './components/ToDoList';
import AddNewToDo from './components/AddNewToDo';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <ToDoList />
            <AddNewToDo />
        </div>
    );
}

export default App;
