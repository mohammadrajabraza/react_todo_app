import { useState, useMemo } from 'react'
import './App.css'
import { updateTodo } from './store/actions'
import { Header, TodoForm, Todo, EmptyList, TriStateButton } from './components'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group'

function App ({ todos, visibilityFilter, updateTodo }) {
  const [text, setText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [itemIdToBeUpdated, setItemToBeUpdated] = useState(-1)

  const updateItem = () => {
    if (itemIdToBeUpdated === -1) {
      swal({ text: 'No item is set for update!', icon: 'error' })
    } else {
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

  const memoizedForm = useMemo(() => {
    return <TodoForm text={text} setText={setText} editMode={editMode} updateItem={updateItem} />
  // eslint-disable-next-line
  }, [text, editMode])

  const todoList = visibilityFilter === 'all'
    ? todos.map((todo, idx) =>
      <CSSTransition
        key={todo.id}
        timeout={700}
        classNames='slide'
      >
        <Todo
          item={todo}
          editItem={editItem}
          index={idx}
          itemIdToBeUpdated={itemIdToBeUpdated}
        />
      </CSSTransition>
      )
    : (visibilityFilter === 'active'
        ? todos.filter((item) => item.isCompleted === false)
            .map((todo, idx) =>
              <CSSTransition
                key={todo.id}
                timeout={700}
                classNames='slide'
              >
                <Todo item={todo} editItem={editItem} index={idx} />
              </CSSTransition>
            )
        : todos.filter((item) => item.isCompleted === true)
          .map((todo, idx) =>
            <CSSTransition
              key={todo.id}
              timeout={700}
              classNames='slide'
            >
              <Todo item={todo} editItem={editItem} index={idx} />
            </CSSTransition>))

  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        {memoizedForm}
        <SwitchTransition mode='out-in'>
          {
            todos.length === 0
              ? <CSSTransition
                  key={0}
                  timeout={300}
                  classNames='fade'
                >
                <EmptyList text='' />
              </CSSTransition>
              : <CSSTransition
                  key={1}
                  timeout={300}
                  classNames='fade'
                >
                <ul>
                  <TransitionGroup>
                    {
                    todoList.length === 0
                      ? <EmptyList text={visibilityFilter} />
                      : todoList
                  }
                  </TransitionGroup>
                </ul>
                </CSSTransition>

          }
        </SwitchTransition>
        <TriStateButton />

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.filters.status
})

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
