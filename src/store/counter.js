import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: null,
    todo: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}


export const fetchTodos = createAsyncThunk("todos/fetch", async (thunkAPI) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos",)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {

        return rejectWithValue(err.response.data)
    }
})

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.message = ""
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false
                state.todos = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = todoSlice.actions
export default todoSlice.reducer