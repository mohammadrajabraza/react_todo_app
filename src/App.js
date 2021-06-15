import { useState } from 'react';
import swal from 'sweetalert';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import './App.css';

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
      <div className="mainContainer">
        <div className="title">Todo List</div>
        <div className="form">
          <input
            placeholder="Enter task"
            onChange = { e => setText(e.target.value)}
            value={text}/>
            {!editMode ? 
            <button onClick= { addItem } >Add</button> :
            <button onClick= { updateItem }>Update</button>
            }        
        </div>
        <div className="list">
          {
            ( list.length === 0 ) ? 
              <p>No item in the list</p> :
              list.map(( item, index ) => {
                return <div className="listItem" key={ Math.random() }>
                  <div className="completeTodo">
                    {/* onChange ={completeItem(index)}
                    to be discussed */}
                    <input type="checkbox" className="css-checkbox"  id={`checkbox${index+1}`} 
                      onChange ={() => completeItem(index)}
                      checked={list[index].isCompleted}/>
                    <label for={`checkbox${index+1}`} name="checkbox1_lbl" className="css-label lite-green-check"></label>
                  </div>
                  <div className="todoDescription" style={list[index].isCompleted ? {textDecoration : 'line-through', textDecorationThickness: '3px'}: {}}>{item.todo}
                  <a href="#" onClick = {() => editItem(index)}><FaEdit/></a>
                  <a href="#" onClick = {() => removeItem(index)}><FaRegTrashAlt/></a>
                  </div>
                </div>
              })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
