import React, { FC, useContext } from "react";
import './BreakPoint.scss'
import { Data } from "../../data/types";
import { MainContext } from "../../Context/MainContext";

interface BreakPointProps {
    cx: string,
    cy: string,
    filled: string,
    active: boolean,
    data: Data
}

export const BreakPoint: FC<BreakPointProps> = ({cx, cy, filled, active, data}) => {
    const {activeDate, setActiveDate} = useContext(MainContext);


    if (activeDate.id === data.id) {
        return (
            <g className="breakpoint_group_active">
                <circle className="breakpoint_active" cx={cx} cy={cy} r="28" stroke="#303E58" strokeOpacity="0.5" fill="#fff" />
                <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="breakpoint_text_active"
                >
                    {data.id}
                </text>
            </g>
        )
    }

    return (
        <g className="breakpoint_group">
            <circle className="breakpoint" onClick={() => setActiveDate(data)} cx={cx} cy={cy} r="28" stroke="#303E58" strokeOpacity="0.5" fill="#fff" />
            <circle className="breakpoint_dot" cx={cx} cy={cy} r="5" fill={filled} />
            <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                className="breakpoint_text"
            >
                {data.id}
            </text>
        </g>
    )
}