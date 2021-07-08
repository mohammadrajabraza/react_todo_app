import { useState } from 'react'
import './App.css'
import { updateTodo } from './actions'
import {TodoForm, Todo, EmptyList, TriStateButton} from './components'
import { connect } from 'react-redux'
import swal from 'sweetalert'


function App({todos, filter, updateTodo}) {
  const [text, setText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [itemIdToBeUpdated, setItemToBeUpdated] = useState(-1)
  

  const updateItem = () => {
    if(itemIdToBeUpdated === -1)
      swal({ text: "No item is set for update!", icon: "error"})
    else {
      updateTodo(itemIdToBeUpdated, text)
      setItemToBeUpdated(-1)
      setText('')
    }
    setEditMode(false)
  }

  const editItem = (index) => {
    setEditMode(true)
    setText(todos[index].todo)
    setItemToBeUpdated(todos[index].id)
  }
  // console.log(todos)
  return (
    <div className="App">
      <div className="main-container">
      <TodoForm text={text} setText={setText} editMode={editMode} updateItem={updateItem}/>
        <ul>
          {
            (todos.length === 0) ?
              <EmptyList/> :
              todos.map((todo, idx) => <Todo todo={todo} editItem={editItem} index={idx}/>)
          }
        </ul>
          <TriStateButton/>
       
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filters.status
})

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)