import { useState } from 'react'
import swal from 'sweetalert'
import './App.css'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';


function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [itemIndexToBeUpdated, setItemToBeUpdated] = useState(-1)
  
  const addItem = () => {
    if(text === '')
      swal({text: "Field is empty!", icon: "warning"})
    else{
      const tempList = [...list]
      tempList.push({todo: text, isCompleted: false})
      setList(tempList)
      resetText()
    }
  }

  const removeItem = (index) => {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  const resetText = () => {
    setText('')
  }

  const editItem = (index) => {
    setEditMode(true)
    setText(list[index].todo)
    setItemToBeUpdated(index)
  }

  const updateItem = () => {
    if(itemIndexToBeUpdated === -1)
      swal({ text: "No item is set for update!", icon: "error"})
    else {
      const tempList = [...list]
      let itemToBeUpdated = tempList.slice(itemIndexToBeUpdated, itemIndexToBeUpdated + 1)
      itemToBeUpdated[0].todo = text
      tempList.splice(itemIndexToBeUpdated, 1, itemToBeUpdated.pop())
      setList(tempList)
      setItemToBeUpdated(-1)
      resetText()
    }
    setEditMode(false)
  }

  const completeItem = (index) => {
      const tempList = [...list]
      let itemToBeUpdated = tempList.slice(index, index +1);
      itemToBeUpdated[0].isCompleted = !itemToBeUpdated[0].isCompleted;
      tempList.splice(index, 1, itemToBeUpdated.pop())
      setList(tempList)
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
            (list.length === 0) ?
              // No todo view
            <div>
              <p className="status free emptylist">
                <img src="https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg" alt="celebration"/>
                Time to chill!  You have no todos.
              </p> 
            </div>  :
              list.map((item, index) => {
                return <li className={item.isCompleted ? 'done': ''}>
                <span className="label">{item.todo}</span>
                <div className="actions">
                  {/* Todo status checkbox */}
                  <button type="button" className="btn-picto"
                  onClick ={() => completeItem(index)}>
                    {item.isCompleted ? 
                      <CheckBoxIcon style={{ color: '#FFF'}}/> :
                      <CheckBoxOutlineBlankIcon style={{ color: '#FFF'}}/>
                      }
                  </button>
                  {/* Todo edit button */}
                  <button type="button" className="btn-picto"
                    onClick = {() => editItem(index)}>
                    <EditIcon style={{ color: '#FFF'}}/>
                  </button>
                  {/* Todo delete button */}
                  <button type="button" className="btn-picto"
                    onClick = {() => removeItem(index)}>
                    <DeleteIcon style={{ color: '#FFF'}}/>
                  
                  </button>
                </div>
              </li>
              })
          }
        </ul>
       
        </div>
    </div>
  );
}

export default App;
