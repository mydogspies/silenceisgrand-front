import React from 'react';
import styled from 'styled-components';

const PhotoIndexText = () => {
    return (
        <Container id="index-photo-text">
            <Headline className="headline"><h1>A universe of imagery, an inner place for photography</h1></Headline>
            <Paragraph><p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum dapibus dolor,
                a aliquam dolor aliquet eget. Mauris volutpat nulla in tempor rhoncus.
                Fusce maximus in massa cursus suscipit. Fusce placerat id justo et mattis.
                Nulla laoreet neque in elit malesuada vulputate. Donec porta finibus eros eget malesuada.
                Aliquam lacus sapien, finibus vitae purus tincidunt, tristique euismod nisl.
                Mauris massa diam, pretium ac imperdiet in, bibendum at nibh. Integer finibus ultrices leo,
                non vestibulum massa molestie non. Curabitur efficitur mi id ultrices mattis.
                Cras at facilisis ligula. Donec suscipit id urna ac facilisis. Aenean ex ligula,
                faucibus euismod ornare et, venenatis ac magna. Etiam vel volutpat ex.
                Vivamus tincidunt ligula sit amet metus sollicitudin, nec tincidunt mi hendrerit.
                Pellentesque nunc est, mollis at vulputate in, vulputate in massa.
            </p></Paragraph>
        </Container>
    );
};

/* CSS */
const Container = styled.div`

`;

const Headline = styled.div`
    
`;

const Paragraph = styled.div`
    
`;

export default PhotoIndexText;
