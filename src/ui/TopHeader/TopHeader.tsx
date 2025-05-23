import React from "react";
import { Swipers } from "../DateList/SwipersFolder/Swipers";
import { MainCircle } from "../MainCircle/MainCircle";
import './TopHeader.scss'

export const TopHeader = () => {
    return (
        <div className="top__container">
            <div className='main__top'>
                <div className='title'>
                    <svg width="6" height="120" viewBox="0 0 6 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 0L2.99999 120" stroke="url(#paint0_linear_1_56)" stroke-width="5" />
                        <defs>
                        <linearGradient id="paint0_linear_1_56" x1="3.5" y1="-6" x2="3.49999" y2="102" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3877EE" />
                            <stop offset="1" stop-color="#EF5DA8" />
                        </linearGradient>
                        </defs>
                    </svg>
                    <h1 className='main__title'>Исторические даты</h1>
                </div>
                <Swipers />
            </div>
            <MainCircle />
        </div>
    )
}