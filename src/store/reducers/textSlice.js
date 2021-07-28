const text = (state = 'a', action) => {
    switch (action) {
        case 'text/clear':
             return ''
        case 'text/set':
            return state.concat(action.payload.text)
        default:
            return state
    }
} 

export default text