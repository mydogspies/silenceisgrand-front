import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useInView} from 'react-intersection-observer';

import globalStyles from '../../../styles/_exports.module.scss';
import './index-photo.styles.scss';

const IndexPhoto = ({currentBackground}) => {

    console.log(currentBackground);

    const [ref, inView] = useInView({
        threshold: .5
    });

    useEffect(() => {

        if(inView) {

        } else {

        }
    })

    return (
        <div ref={ref} className='wrapper'>
            <div ref={ref} className="index-photo-container">
                <h1>photography by design or by intuition but always daring</h1>
                <p>many images small or big but the text must be epic</p>
            </div>
        </div>

    );
};

const mapStateToProps = state => ({
    currentBackground: state.style.currentBackground
})

export default connect(mapStateToProps)(IndexPhoto);
