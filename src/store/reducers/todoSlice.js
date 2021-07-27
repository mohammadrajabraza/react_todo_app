
const todos = (state = [], action) => {
    switch (action.type) {
        case 'todo/add':
            return [
                ...state, 
                {
                    id : action.payload.id,
                    todo : action.payload.text,
                    isCompleted: false
                }
            ]
        case 'todo/toggle':
            return state.map((item) => 
                item.id === action.payload.id ?
                    {...item, isCompleted: !item.isCompleted} :
                    item
            )
        case 'todo/update':
            return state.map((item) =>
                item.id === action.payload.id ? 
                    {...item, todo: action.payload.text}:
                    item
            )
        case 'todo/delete':
            return state.filter((item) => item.id !== action.payload.id)
        default :
            return state

    }
}

export default todos