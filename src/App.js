import { useState } from 'react'
import './App.css'
import {TodoForm, Todo, EmptyList} from './components'
import { connect } from 'react-redux'


function App({todos}) {
  const [text, setText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [itemIdToBeUpdated, setItemToBeUpdated] = useState(-1)
  
  

  const resetText = () => {
    setText('')
  }

  const editItem = (index) => {
    setEditMode(true)
    setText(todos[index].todo)
    setItemToBeUpdated(todos[index].id)
  }
  console.log(todos)
  return (
    <div className="App">
      <div className="main-container">
      <TodoForm text={text} setText={setText} resetText={resetText}
          itemIdToBeUpdated={itemIdToBeUpdated} setItemToBeUpdated={setItemToBeUpdated}
          editMode={editMode} setEditMode={setEditMode}
      />
        <ul>
          {
            (todos.length === 0) ?
              <EmptyList/> :
              todos.map((todo, idx) => <Todo todo={todo} editItem={editItem} index={idx}/>)
          }
        </ul>
       
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)