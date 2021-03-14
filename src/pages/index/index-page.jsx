import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import _ from 'lodash';

import IndexTop from '../../components/index-roll/index-top/index-top';
import IndexPhoto from '../../components/index-roll/index-photo/index-photo';
import IndexIllustration from '../../components/index-roll/index-illustration/index-illustration';
import IndexMixed from '../../components/index-roll/index-mixed-media/index-mixed-media';
import IndexBlog from '../../components/index-roll/index-blog/index-blog';
import IndexFooter from '../../components/index-roll/index-footer/index-footer';

import MenuButton from '../../components/navigation/menu-button/menu-button';
import AboutButton from '../../components/navigation/menu-about/menu-about';
import NextButton from '../../components/navigation/menu-next/menu-next';
import BackButton from '../../components/navigation/menu-back/menu-back';

const IndexPage = () => {

    const events = useSelector(state => state.events);
    const currentVisibleComponent = events.currentVisibleComponent;

    /* should be set to order of index-roll comps */
    const componentArray = [
        'index-top',
        'index-photo',
        'index-illustration',
        'index-mixed-media',
        'index-blog',
        'index-footer'
    ];

    let history = useRef([]);
    let next = '';
    let previous = useRef('');


    useEffect(() => {

        if(history.current.length > 20) {
            history.current.shift();
        }
        history.current.push(currentVisibleComponent);

        previous.current = _.nth(history.current, history.current.length - 2);

    }, [currentVisibleComponent]);

    return (
        <div id="index-page">
            <AboutButton/>
            <MenuButton/>
            <NextButton next={next} />
            <BackButton previous={previous.current} />
            <IndexTop/>
            <IndexPhoto/>
            <IndexIllustration/>
            <IndexMixed/>
            <IndexBlog/>
            <IndexFooter/>
        </div>
    );
}

export default IndexPage;
