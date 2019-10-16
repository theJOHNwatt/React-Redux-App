import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchPhotos = () => dispatch => {
    dispatch({type: START_FETCHING});
    axios
    .get('https://jservice.io/api/random')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}, console.log('From Action axios',res.data)))
    .catch (err => dispatch({type: FETCH_FAILED, payload: err.res}));
};