import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from '../ToDoItem';

const ToDoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const status = useSelector((state) => state.todos.status);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading todos</div>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default ToDoList;
