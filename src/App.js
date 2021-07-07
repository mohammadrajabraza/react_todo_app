import { useState } from 'react'
import swal from 'sweetalert'
import './App.css'
import Todo from './components/Todo'
import {
  connect
} from 'react-redux'
import {
  addTodo,
  updateTodo
} from './actions'


function App({todos, addTodo, updateTodo}) {
  const [text, setText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [itemIdToBeUpdated, setItemToBeUpdated] = useState(-1)
  
  const addItem = () => {
    if(text === '')
      swal({text: "Field is empty!", icon: "warning"})
    else{
      addTodo(text)
      resetText()
    }
  }

  const resetText = () => {
    setText('')
  }

  const editItem = (index) => {
    setEditMode(true)
    setText(todos[index].todo)
    setItemToBeUpdated(todos[index].id)
  }

  const updateItem = () => {
    if(itemIdToBeUpdated === -1)
      swal({ text: "No item is set for update!", icon: "error"})
    else {
      updateTodo(itemIdToBeUpdated, text)
      setItemToBeUpdated(-1)
      resetText()
    }
    setEditMode(false)
  }

  

  return (
    <div className="App">
      <div className="main-container">
        <div className="title">Todo List</div>
        <div className="form">
          <input type="text" placeholder="Enter todo here"
            onChange = { e => setText(e.target.value)}
            value={text}/>
          {!editMode ? 
            <button type="button" onClick= { addItem } >Add Item</button> :
            <button type="button" onClick= { updateItem }>Update Item</button>
          }   
        </div>
        <ul>
          {
            (todos.length === 0) ?
            <div>
              <p className="status free emptylist">
                <img src="https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg" alt="celebration"/>
                Time to chill!  You have no todos.
              </p> 
            </div>  :
              todos.map((todo, idx) => {
                return <Todo todo={todo} editItem={editItem} index={idx}/>
              })
          }
        </ul>
       
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)