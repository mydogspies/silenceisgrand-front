import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';

import {setViewHistory} from "../../redux/events/events.actions";

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

    const [backButtonVisibility, setBackButtonVisibility] = useState('hidden');
    const [nextButtonVisibility, setNextButtonVisibility] = useState('hidden');
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

    useEffect(() => {

        setBackButtonVisibility((currentVisibleComponent === _.head(componentArray) ? 'hidden' : 'visible'));
        setNextButtonVisibility((currentVisibleComponent === _.last(componentArray) ? 'hidden' : 'visible'));

    }, [currentVisibleComponent]);

    return (
        <div id="index-page">
            <AboutButton/>
            <MenuButton/>
            {/*<NextButton visibility={nextButtonVisibility}/>*/}
            {/*<BackButton hashlink="true" visibility={backButtonVisibility}/>*/}
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
