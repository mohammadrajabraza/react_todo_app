const text = (text = '', action) => {
    switch (action) {
        case 'text/clear':
             return ''
        case 'text/set':
            return action.payload.text
        default:
            return ''
    }
} 

export default text