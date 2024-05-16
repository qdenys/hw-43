import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../features/todos/todosSlice';

const ToDoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const onChange = () => {
        dispatch(toggleTodo(todo.id));
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onChange}
            />
            {todo.title}
        </li>
    );
};

export default ToDoItem;
