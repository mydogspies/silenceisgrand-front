import React from 'react';

import globalStyles from '../../../styles/_exports.module.scss';
import './index-photo.styles.scss';

const IndexPhoto = () => {

    return (
        <div style={{
            backgroundColor: globalStyles.backgroundColorPhoto,
            color: globalStyles.textColorPhoto
        }}>
            <h1>photography by design or by intuition but always daring</h1>
            <p>many images small or big but the text must be epic</p>
        </div>
    );
};

export default IndexPhoto;
