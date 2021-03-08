import React from 'react';

import IndexTop from '../../components/index-roll/index-top/index-top';
import IndexPhoto from '../../components/index-roll/index-photo/index-photo';

import '../../styles/global.scss';
import './index-page.styles.scss';

const IndexPage = () => {

    return (
        <div>
            <IndexTop />
            <IndexPhoto />
        </div>
    );
};

export default IndexPage;
