const initialState = {
    friends : []
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
}

export default reducer;