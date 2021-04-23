import React from 'react';

import IndexTop from '../../components/index-roll/index-top/index-top';
import IndexPhoto from '../../components/index-roll/index-photo/index-photo';
import IndexIllustration from '../../components/index-roll/index-illustration/index-illustration';
import IndexMixed from '../../components/index-roll/index-mixed-media/index-mixed-media';
import IndexBlog from '../../components/index-roll/index-blog/index-blog';
import IndexFooter from '../../components/index-roll/index-footer/index-footer';

import siteConfig from '../../config/siteConfig';
import IndexOffline from '../../components/index-roll/index-offline/index-offline';

const IndexPage = () => {

    // TODO siteConfig is only for development... this will be another method later

    if(siteConfig.siteOnline) {
        return (
            <div id="index-page">
                <IndexTop/>
                <IndexPhoto/>
                <IndexIllustration/>
                <IndexMixed/>
                <IndexBlog/>
                <IndexFooter/>
            </div>
        );
    } else {
        return (
            <div id="index-page">
                <IndexOffline/>
            </div>
        );
    }

}

export default IndexPage;
