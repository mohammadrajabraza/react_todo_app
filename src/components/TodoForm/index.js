import swal from 'sweetalert'
import { addTodo } from '../../store/actions'
import { connect } from 'react-redux'

function TodoForm ({ text, setText, editMode, addTodo, updateItem }) {
  const addItem = () => {
    if (text === '') { swal({ text: 'Field is empty!', icon: 'warning' }) } else {
      addTodo(text)
      setText('')
    }
  }

  const handleKeyPress = (e) => {
    if (!(e.which === 13 || e.keyCode === 13)) return

    addTodo(text)
    setText('')
  }

  return (
    <>
      <div className='title'>Todo List</div>
      <div className='form'>
        <input
          type='text' placeholder='Enter todo here'
          onChange={e => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          value={text}
        />
        {!editMode
          ? <button type='button' onClick={addItem}>Add Item</button>
          : <button type='button' onClick={updateItem}>Update Item</button>}
      </div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
