import { useState } from 'react'
import './App.css'
import { updateTodo } from './actions'
import {TodoForm, Todo, EmptyList, TriStateButton} from './components'
import { connect } from 'react-redux'
import swal from 'sweetalert'


function App({todos, visibilityFilter, updateTodo}) {
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

  const editItem = (idx) => {
    setEditMode(true)
    setText(todos[idx].todo)
    setItemToBeUpdated(todos[idx].id)
  }

  const todoList = visibilityFilter === 'all' ? 
          todos.map((todo, idx) => <Todo key={todo.id} item={todo} editItem={editItem} index={idx}/>) :
          (visibilityFilter === 'active' ? 
              todos.filter((item) => item.isCompleted === false)
                .map((todo, idx) => <Todo key={todo.id} item={todo} editItem={editItem} index={idx}/>) :
                   todos.filter((item) => item.isCompleted === true)
                   .map((todo, idx) => <Todo key={todo.id} item={todo} editItem={editItem} index={idx}/>) )

  return   <div className="App">
            <div className="main-container">
              <TodoForm text={text} setText={setText} editMode={editMode} updateItem={updateItem}/>
                {
                  todos.length === 0 ?
                    <EmptyList text=""/>:
                    <ul>
                      {
                        todoList.length === 0 ?
                          <EmptyList text={visibilityFilter}/>:
                          todoList
                        //(todos.length === 0) ?
                          //<EmptyList/> :
                          //todos.map((todo, idx) => <Todo todo={todo} editItem={editItem} index={idx}/>)
                      }
                    </ul>
                }
              <TriStateButton/>
            
            </div>
        </div>
  
}

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.filters.status
})

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)