const addTodo = text => ({
        type: "todo/add",
        payload: {
            id: (Math.random() *100000).toFixed(0),
            text
        }
})

const updateTodo = (id, text) => ({
    type: "todo/update",
    payload: {
        id,
        text
    }
})

const deleteTodo = id => ({
    type: "todo/delete",
    payload: {
        id
    }
})

const toggleTodo = id => ({
    type : "todo/toggle",
    payload: {
        id
    }
})

export {
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
}