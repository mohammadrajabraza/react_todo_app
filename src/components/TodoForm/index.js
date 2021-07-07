import swal from 'sweetalert'
import { addTodo, updateTodo } from '../../actions'
import { connect } from 'react-redux'

function TodoForm({text, setText, resetText, itemIdToBeUpdated,
     setItemToBeUpdated, editMode, setEditMode, updateTodo, addTodo}){


    const addItem = () => {
        if(text === '')
          swal({text: "Field is empty!", icon: "warning"})
        else{
          addTodo(text)
          resetText()
        }
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

    return<> 
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
    </>
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)