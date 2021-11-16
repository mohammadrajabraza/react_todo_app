import { deleteTodo, toggleTodo } from '../../store/actions'
import { connect } from 'react-redux'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

function Todo ({ item: { id, todo, isCompleted }, index, editItem, toggleTodo, deleteTodo }) {
  return (
    <li className={isCompleted ? 'done' : ''}>
      <span className='label'>{todo}</span>
      <div className='actions'>
        {/* Todo status checkbox */}
        <button
          type='button' className='btn-picto'
          onClick={() => toggleTodo(id)}
        >
          {isCompleted
            ? <CheckBoxIcon style={{ color: '#FFF' }} />
            : <CheckBoxOutlineBlankIcon style={{ color: '#FFF' }} />}
        </button>
        {/* Todo edit button */}
        <button type='button' className='btn-picto' onClick={() => editItem(index)}>
          <EditIcon style={{ color: '#FFF' }} />
        </button>
        {/* Todo delete button */}
        <button
          type='button' className='btn-picto'
          onClick={() => deleteTodo(id)}
        >
          <DeleteIcon style={{ color: '#FFF' }} />

        </button>
      </div>
    </li>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
