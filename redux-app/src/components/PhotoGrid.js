import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions';
import PhotoCard from './PhotoCard';
import '../App.scss'

const PhotoGrid = props => {
    useEffect(() => {
        props.fetchPhotos();
    },[]);

    if (props.isFetching) {
        return <h2>Loading Images...</h2>;
    }

    return (
        <div>
            {props.error&& <p>{props.error}</p>}
            {props.imgApi.map(item => (
                <PhotoCard key={item.id} question={item.question} answer={item.answer} category={item.category}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        imgApi: state.imgApi,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchPhotos})(PhotoGrid);