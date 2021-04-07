import React, {createElement} from 'react';
import styled from 'styled-components';

import ImagesComponent from './photo-index-images-component.';

const ImagesData = ({color, row, column}) => {

    // TODO this is where the image array and text is defined!
    // TODO should receive a contentSet via props and resolve it

    // TODO fetch a lots of images from the given contentSet

    const imageArray = [
        'test_img_1.png',
        'test_img_2.png',
        'test_img_3.png'
    ];

    let data = {
        content: imageArray,
        text: 'hello'
    };

    return (
        <Container color={color} row={row} column={column} id="photo-wall-content">
            {
                createElement(ImagesComponent, data)
            }
        </Container>
    );
};

/* CSS */
/* Note that the content below this container is Flex and centered" */
const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color};
  grid-row-start: ${props => props.row};
  grid-column-start: ${props => props.column};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ImagesData;
