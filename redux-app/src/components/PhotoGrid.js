import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions';
import PhotoCard from './PhotoCard';

const PhotoGrid = props => {


    return (
        <div>

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