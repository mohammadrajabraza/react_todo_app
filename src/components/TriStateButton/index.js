import {connect} from 'react-redux'
import {showAllTodos, showActiveTodos, showCompletedTodos} from '../../actions'
function TriStateButton({filter, showAllTodos, showActiveTodos, showCompletedTodos}) {

    return  <div className="config-box" id="configBox">
                <h4 className="inputLabel">Filter Todos</h4>
                <form className="rotationTypeContainer">
                    <input type="radio" id="position1" name="rotationOption" checked={filter === 'active'} onChange={showActiveTodos}/>
                    <input type="radio" id="position2" name="rotationOption" checked={filter === 'all'} onChange={showAllTodos}/>
                    <input type="radio" id="position3" name="rotationOption" checked={filter === 'completed'} onChange={showCompletedTodos}/>
                    <label htmlFor="position1" className="rotationType__label"><p>Active</p></label>
                    <label htmlFor="position2" className="rotationType__label"><p>All</p></label>
                    <label htmlFor="position3" className="rotationType__label"><p>Done</p></label>
                    <div className="rotationType__slideBg"></div>
                </form>
            </div>
}

const mapStateToProps = state => ({
    filter: state.filters.status
})
  
const mapDispatchToProps = dispatch => ({
    showAllTodos: () => dispatch(showAllTodos()),
    showActiveTodos: () => dispatch(showActiveTodos()),
    showCompletedTodos: () => dispatch(showCompletedTodos())
})

export default connect(mapStateToProps, mapDispatchToProps) (TriStateButton)