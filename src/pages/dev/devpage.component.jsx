import React from 'react';
import Logo from '../../assets/SiG_HUSH_212x300.jpg'

import './devpage.styles.scss'

const DevPage = ({devTest}) => {
    const {testString} = devTest;
    return (
        <div className='dev-page-container'>
            <h1 className='dev-header-text'>
                Soon to come - the new Silenceisgrand site!
            </h1>
            <p className='dev-header-small-text'>
                Berlin based photographer and visual artist
            </p>
            <div className='dev-logo'>
                <img className='image' src={Logo} alt='silenceisgrand hush' />
            </div>
            <p className='dev-paragraph-text'>
                This site is right now under construction and will be online end of March 2021!
            </p>
            {
                testString ?
                    <p className='dev-footer-text'>{testString}</p>
                    :
                    <p className='dev-footer-text'>silenceisgrand.com 2021</p>
            }
        </div>
    );
};

export default DevPage;
