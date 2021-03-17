import React from 'react';
import styled from 'styled-components';

import PhotoWallContent from "./photo-index-wall-content";

const PhotoIndexImageWall = () => {

    const myComp = PhotoWallContent;

    return (
        <Container id="photo-image-wall">
            <PhotoWallContent text="hello" color="blue" row="1" column="1"/>
            <PhotoWallContent text="hello" color="red" row="1" column="2"/>
            <PhotoWallContent text="hello" color="green" row="2" column="1"/>
            {React.createElement(myComp,
                {
                    color: 'yellow',
                    row: '3',
                    column: '3',
                    text: 'goodbye'
                }
            )}
        </Container>
    );
};

/* CSS */
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export default PhotoIndexImageWall;
