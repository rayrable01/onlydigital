import React from 'react';
import './app.css'
import { DateList } from './ui/DateList/DateList';
import { MainProvider } from './Context/MainContext';
import { TopHeader } from './ui/TopHeader/TopHeader';

const App = () => {
    return (
    <>
        <MainProvider>
            <TopHeader />
            <DateList />
        </MainProvider>
    </> )
};

export default App;
