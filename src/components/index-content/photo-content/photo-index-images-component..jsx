import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const ImagesComponent = ({content, text}) => {

    let intervalTime = getRandomInterval(3000, 5000);
    const [image, setImage] = useState(text);

    useEffect(() => {

        const interval = setInterval(() => {

            let randIndex = getRandomInterval(0,3);

            if(randIndex === 0) {
                setImage(text);
            } else {
                setImage(content[randIndex]);
            }

        }, intervalTime);
        return () => clearInterval(interval);

    }, [image]);

    return (
        <Container id="photo-wall-images">
            <div>
                {image}
            </div>
        </Container>
    );

};

function getRandomInterval(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Container = styled.div`
  
`;

export default ImagesComponent;
