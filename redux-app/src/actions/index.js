import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchPhotos = () => dispatch => {
    dispatch({type: START_FETCHING});
    axios
    .get('https://picsum.photos/v2/list')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res}, console.log('From Action axios',res.data)))
    .catch (err => dispatch({type: FETCH_FAILED, payload: err.res}));
};