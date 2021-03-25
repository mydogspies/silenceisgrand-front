import React from 'react';
import styled from 'styled-components';

const PhotoWallContent = ({text, color, row, column}) => {

    return (
        <Container color={color} row={row} column={column}>
            {text}
        </Container>
    );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color};
  grid-row-start: ${props => props.row};
  grid-column-start: ${props => props.column};
`;

export default PhotoWallContent;
