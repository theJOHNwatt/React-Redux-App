const initialState = {
    imgApi: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    console.log('This is state', state);
    switch(action.type) {



        default:
            return state;
    }
}




export default reducer;