const filter = (state = {}, action) => {
    switch (action.type) {
        case 'filter/all':
            return {
                ...state, 
                status: 'all'
                }     
        case 'filter/active':
            return {
                ...state, 
                status: 'active'
                }
        case 'filter/completed':
            return {
                ...state, 
                status: 'completed'
                }
        default :
            return state

    }
}

export default filter