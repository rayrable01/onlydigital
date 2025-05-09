import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { Event } from "../../data/types";
import animatedItem from "./DateItem.animations";


interface DateItemProps {
    data: Event
}

export const DateItem: FC<DateItemProps> = ({data}) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        animatedItem(itemRef.current)
    }, [data])

    return (
        <div ref={itemRef}>
            <Year>{data.year}</Year>
            <Description>{data.info}</Description>
        </div>
    )
}

const Year = styled.span`
    font-weight: 400;
    font-size: 25px;
    line-height: 120%;
    text-transform: uppercase;
    color: #3877ee;
    margin-bottom: 15px;
    font-family: var(--second-family);
`;

const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #42567a;
`