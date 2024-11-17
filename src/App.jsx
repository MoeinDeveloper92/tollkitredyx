import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchTodos, reset } from "./store/counter"
const App = () => {
  const { todos, todo, isLoading, isError, message } = useSelector((state) => state.todoSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      console.log("ERROR")
    }
    dispatch(reset())
  }, [dispatch, isError, message, todos])
  const handleClick = () => {
    dispatch(fetchTodos({ title: "new Added" }))
  }
  if (isLoading) {
    return <h1>LOADING.....................</h1>
  }
  return (
    <div>
      <button onClick={handleClick} >
        fetch  Todos
      </button>
      {todos && todos.map((todo) => (
        <h1 key={todo.id}>
          {todo.title}
        </h1>
      ))}
    </div>
  )
}

export default App