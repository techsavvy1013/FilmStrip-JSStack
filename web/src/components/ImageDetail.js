import React from 'react';
import PropTypes from 'prop-types'
import sample from '../Images/reference.png';

function ImageDetail({ imageItem, serverUrl }) {
    return (
        <div className='row' id="large">
            <div className='col-8 '>
                <img
                    src={imageItem === undefined ? sample : `${serverUrl}large/${imageItem.image}`}
                    className='img-fluid'
                    alt='Big one'
                    height={100}
                />
            </div>
            <div className='col-4 text-container details'>
                <div className='field-container'>
                    <strong>Title</strong>
                    <p>
                        {imageItem !== undefined && imageItem.title}
                    </p>
                </div>
                <div className='field-container'>
                    <strong>Description</strong>
                    <p>
                        {imageItem !== undefined && imageItem.description}
                    </p>
                </div>
                <div className='field-container'>
                    <strong>cost</strong>
                    <p>
                        {imageItem !== undefined && imageItem.cost}
                    </p>
                </div>
                <div className='field-container'>
                    <strong>id</strong>
                    <p>
                        {imageItem !== undefined && imageItem.id}
                    </p>
                </div>
                <div className='field-container'>
                    <strong>Thumbnail Image</strong>
                    <p>
                        {imageItem !== undefined && imageItem.thumbnail}
                    </p>
                </div>
                <div className='field-container'>
                    <strong>Large Image Name</strong>
                    <p>
                        {imageItem !== undefined && imageItem.image}
                    </p>
                </div>
            </div>
        </div>
    );
}

ImageDetail.propTypes = {
    imageItem: PropTypes.object,
    serverUrl: PropTypes.string,
}

export default ImageDetail;