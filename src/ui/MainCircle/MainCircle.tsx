import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BreakPoint } from '../BreakPoint/BreakPoint';
import { MainContext } from '../../Context/MainContext';
import { animateCounter } from './MainCircle.animations';
import { Data } from '../../data/types';


export const MainCircle = () => {
    const {activeDate, dataArray} = useContext(MainContext);
    const [previousDate, setPreviousDate] = useState<Data>(activeDate);
    const blueDate = useRef(null);
    const redDate = useRef(null);

    useEffect(() => {
        animateCounter(blueDate.current, previousDate.endYear, activeDate.endYear, 0.5);
        animateCounter(redDate.current, previousDate.startYear, activeDate.startYear, 0.5);
        setPreviousDate(activeDate);
    }, [activeDate]);

    return (
        <CircleContainer>
            <VerticalLine />
            <HorizontalLine />
            <svg style={{zIndex: 5}} width="610" height="545" viewBox="0 0 538 530" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.2" cx="268" cy="265" r="264.5" stroke="#42567A" />
                <BreakPoint cx={'533'} cy={'265'} filled={'#42567A'} active={false} data={dataArray[0]} />
                <BreakPoint cx={'138'} cy={'34'} filled={'#42567A'} active={false} data={dataArray[1]} />
                <BreakPoint cx={'402'} cy={'34'} filled={'#42567A'} active={false} data={dataArray[2]} />
                <BreakPoint cx={'402'} cy={'492'} filled={'#42567A'} active={false} data={dataArray[3]} />
                <BreakPoint cx={'126'} cy={'489'} filled={'#42567A'} active={false} data={dataArray[4]} />
                <BreakPoint cx={'3'} cy={'265'} filled={'#42567A'} active={true}  data={dataArray[5]} />
            </svg>
            <BigYearsContainer>
                <BigYear ref={blueDate}>{activeDate.endYear}</BigYear>
                <BigYear ref={redDate} style={{color: '#ef5da8' }}>{activeDate.startYear}</BigYear>
            </BigYearsContainer>
        </CircleContainer>
    );
};

// Линия по центру вертикальная
const VerticalLine = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    opacity: 0.2;
    height: 100%;
    background-color: #42567A;
    transform: translateX(-50%);
    z-index: 1; 
`;

// Линия по центру горизонтальная
const HorizontalLine = styled.div`
    position: absolute;
    top: 50%;
    left: 30px;
    opacity: 0.2;
    width: 550px;
    height: 1px;
    background-color: #42567A;
    z-index: 1; 
`;

const CircleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 50px;

    @media (max-width: 900px) {
        align-self: center !important;
    }
`;

const BigYearsContainer = styled.div`
    display: flex;
    gap: 50px;
    position: absolute;
    z-index: 2;
`;

const BigYear = styled.span`
    font-weight: 700;
    font-size: 200px;
    line-height: 80%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #5d5fef;
    pointer-events: none;

    @media (max-width: 750px) {
        font-size: 100px;
    }
`;
