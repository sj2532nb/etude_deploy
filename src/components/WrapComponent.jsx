import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import GotopComponent from './wrap/GotopComponent';
import RightModalComponent from './wrap/RightModalComponent';

export default function WrapComponent(){
    return (
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GotopComponent/>
            <RightModalComponent/>
        </div>
    );
};