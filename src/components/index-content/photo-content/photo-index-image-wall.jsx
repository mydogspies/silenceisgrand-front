import React from 'react';
import styled from 'styled-components';

import PhotoWallContent from "./photo-index-wall-content";

const PhotoIndexImageWall = () => {

    const compArray = [];
    const rows = 5;
    const columns = 5;
    let idx = 0;

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {

            let colorMath = Math.floor(Math.random() * 16777216).toString(16);
            let color = '#000000'.slice(0, -colorMath.length) + colorMath;

            let compProps = {
                color: color,
                row: i+1,
                column: j+1,
                text: 'LOADS',
                key: idx++
            };

            let comp = {
                comp: PhotoWallContent,
                props: compProps,
            };

            compArray.push(comp);

        }


    }

    return (
        <Container id="photo-image-wall">

            {
                compArray.map((obj) => {
                    return React.createElement(obj.comp, obj.props)
                })
            }

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
