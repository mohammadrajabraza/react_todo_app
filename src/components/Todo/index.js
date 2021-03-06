import { deleteTodo, toggleTodo } from '../../store/actions'
import { connect } from 'react-redux'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CustomButton from '../CustomButton'

function Todo (props) {
  const {
    item: { id, todo, isCompleted },
    index,
    editItem,
    itemIdToBeUpdated,
    toggleTodo,
    deleteTodo
  } = props

  return (
    <li className={isCompleted ? 'done' : ''}>
      <span className='label'>{todo}</span>
      <div className='actions'>
        {/* Todo status checkbox */}
        <CustomButton
          className='btn-picto'
          handleClick={() => toggleTodo(id)}
        >
          {isCompleted
            ? <CheckBoxIcon style={{ color: '#FFF' }} />
            : <CheckBoxOutlineBlankIcon style={{ color: '#FFF' }} />}
        </CustomButton>
        {/* Todo edit button */}
        <CustomButton
          className='btn-picto'
          handleClick={() => editItem(index)}
        >
          <EditIcon style={{ color: '#FFF' }} />
        </CustomButton>
        {/* Todo delete button */}
        <CustomButton
          className='btn-picto'
          handleClick={() => deleteTodo(id)}
          isDisabled={id === itemIdToBeUpdated}
        >
          <DeleteIcon style={{ color: '#FFF' }} />

        </CustomButton>
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
