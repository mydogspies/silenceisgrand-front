import React, {createElement} from 'react';
import styled from 'styled-components';

import ImagesData from "./photo-index-images-data";

const ImagesContainer = () => {

    // TODO should make list of contentSet and pass each into the compProps

    // TODO fetch a list of contentSet with location:"index"

    /*Define the content array and populate */
    let idx = 0;
    let rowIdx= 1;
    let columnIdx = 1;
    const compArray = [];
    const contentGrid = [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1]
    ];

    contentGrid.forEach(row => {
        row.forEach(column =>  {
            if (column) {

                let colorMath = Math.floor(Math.random() * 16777216).toString(16);
                let color = '#000000'.slice(0, -colorMath.length) + colorMath;

                let compProps = {
                    color: color,
                    row: rowIdx,
                    column: columnIdx,
                    content: 'LOADS',
                    key: idx++
                };

                let comp = {
                    comp: ImagesData,
                    props: compProps,
                };

                compArray.push(comp);
            }
            columnIdx++;
            idx++;
        });
        columnIdx = 1;
        rowIdx++;
    });


    return (
        <Container id="photo-image-wall">

            {
                compArray.map((obj) => {
                    return createElement(obj.comp, obj.props);
                })
            }

        </Container>
    );
};

/* CSS */
const Container = styled.div`
  width: 45vw;
  height: 45vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export default ImagesContainer;
