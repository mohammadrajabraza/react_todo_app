const addTodo = text => ({
  type: 'todo/add',
  payload: {
    id: (Math.random() * 100000).toFixed(0),
    text
  }
})

const updateTodo = (id, text) => ({
  type: 'todo/update',
  payload: {
    id,
    text
  }
})

const deleteTodo = id => ({
  type: 'todo/delete',
  payload: {
    id
  }
})

const toggleTodo = id => ({
  type: 'todo/toggle',
  payload: {
    id
  }
})

const setText = text => ({
  type: 'text/set',
  payload: {
    text
  }
})

const resetText = () => ({
  type: 'text/clear'
})

const showAllTodos = () => ({
  type: 'filter/all'
})

const showActiveTodos = () => ({
  type: 'filter/active'
})

const showCompletedTodos = () => ({
  type: 'filter/completed'
})

export {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
  setText,
  resetText,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos
}
