const initialState = [
        {id: "12345", todo: "Task 2", isCompleted: false},
        {id: "23456", todo: "Task 3", isCompleted: false},
        {id: "45678", todo: "Task 4", isCompleted: false}
    ]
const todos = (state = initialState, action) => {
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
            return []

    }
}

export default todos