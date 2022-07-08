import React from 'react';
import LangContext, { English, Hindi, Tamil } from '../contexts/LangContext';
import Header from './Header';

const langs = {
    en: English,
    ta: Tamil,
    hn: Hindi
}


const LangRoute = (props) => {
    return (
        <>
        <h2>Language dynamic url</h2>
        <LangContext.Provider value={ langs[props.match.params.lang || 'en']}>
            <Header />
        </LangContext.Provider>
        </>
    )
}

export default LangRoute;