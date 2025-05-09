import React, { useContext } from "react";
import { DateItem } from "../DateItem/DateItem";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import { MainContext } from "../../Context/MainContext";

const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;

    .swiper-button-next,
    .swiper-button-prev {
        color: #333; // цвет стрелок
    }

`;

export const DateList = () => {
    const {activeDate} = useContext(MainContext);

    return (
        <Wrapper>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >   
                {activeDate.events && activeDate.events.map((item, index) => (
                    <SwiperSlide><DateItem data={item} key={index} /></SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};
