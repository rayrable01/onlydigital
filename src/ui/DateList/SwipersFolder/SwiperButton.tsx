import React, { FC } from "react";
import styled from "styled-components";

interface SwipeButtonProps {
    svg: string,
    click: () => void,
}

export const SwiperButton: FC<SwipeButtonProps> = ({svg, click}) => {
    return (
        <SwipeButton onClick={click} type="button">{svg}</SwipeButton>
    )
}

const SwipeButton = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: transparent;
    border: none;
    outline: 1px solid grey;
`