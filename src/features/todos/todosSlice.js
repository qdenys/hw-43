import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	return response.json();
});

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		items: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		addTodo: (state, action) => {
			state.items.push(action.payload);
		},
		toggleTodo: (state, action) => {
			const todo = state.items.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
