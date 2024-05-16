import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todosSlice';

const AddNewToDo = () => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		if (title.trim()) {
			dispatch(addTodo({
				id: Date.now(),
				title,
				completed: false
			}));
			setTitle('');
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Add a new todo"
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default AddNewToDo;
