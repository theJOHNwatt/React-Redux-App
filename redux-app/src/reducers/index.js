import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILED} from '../actions'

const initialState = {
    imgApi: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    console.log('This is state', state);
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                imgApi: action.payload
            }
        case FETCH_FAILED:
            return {
                ...state,
                error: 'Error Fetching Data',
                isFetching: false
            }

        default:
            return state;
    }
}




export default reducer;