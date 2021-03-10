import React from 'react';


import IndexTop from '../../components/index-roll/index-top/index-top';
import IndexPhoto from '../../components/index-roll/index-photo/index-photo';
import IndexIllustration from '../../components/index-roll/index-illustration/index-illustration';
import IndexMixed from '../../components/index-roll/index-mixed-media/index-mixed-media';
import IndexBlog from '../../components/index-roll/index-blog/index-blog';
import IndexFooter from '../../components/index-roll/index-footer/index-footer';

// TODO should be refactored into css-in-js!
import '../../styles/global.scss';

const IndexPage = () => {

    return (
        <div>
            <IndexTop />
            <IndexPhoto />
            <IndexIllustration />
            <IndexMixed />
            <IndexBlog />
            <IndexFooter />
        </div>
    );
};

export default IndexPage;
