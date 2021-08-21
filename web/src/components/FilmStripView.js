import React, { useState, useEffect } from 'react';
import ImageDetail from "./ImageDetail";
import ThumbNail from "./ThumbNail";

function FilmStripView(props) {
    var serverUrl = 'http://localhost:4000/';

    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
        fetch(serverUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('Data from Server:', data);
                setSlidesData(data);
            });
    }, []);

    return (
        <div className='App'>
            <div id="container">
                <ImageDetail
                    imageItem={slidesData[activeSlide]}
                    serverUrl={serverUrl}
                />
                <ThumbNail
                    slidesData={slidesData}
                    serverUrl={serverUrl}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
            </div>
        </div>
    );
}

export default FilmStripView;
