import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MainContext } from "../../../Context/MainContext";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperButton } from "./SwiperButton";
import gsap from "gsap";

export const Swipers = () => {
    const { activeDate, dataArray, setActiveDate } = useContext(MainContext);
    const swiperRef = useRef<any>(null);
    const divType = useRef(null);

    useEffect(() => {
        gsap.fromTo(divType.current, {opacity: 0}, {opacity: 1, duration: 1.5})
    }, [activeDate])

    const handleSlideChange = (swiper: any) => {
        const newIndex = swiper.activeIndex;
        if (newIndex >= 0 && newIndex < dataArray.length) { 
            setActiveDate(dataArray[newIndex]);
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const nextIndex = swiperRef.current.swiper.activeIndex + 1;
            if (nextIndex < dataArray.length) {
                swiperRef.current.swiper.slideNext();
            }
        }
    };

    const totalLength = dataArray.length < 10 ? '0' + dataArray.length : dataArray.length;
    const activeNumber = activeDate.id < 10 ? '0' + activeDate.id : activeDate.id;

    return (
        <MainContainer>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <Counter>{activeNumber}/{totalLength}</Counter>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <SwiperButton click={goPrev}
                        svg={<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
                        </svg>}
                    />
                    <SwiperButton click={goNext}
                        svg={<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2" />
                        </svg>}
                    />
                </div>
            </div>
            <Type ref={divType}>{activeDate.type}</Type>

            <StyledSwiper
                ref={swiperRef}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    const initialIndex = dataArray.findIndex(item => item.id === activeDate.id);
                    swiper.slideTo(initialIndex, 0);
                }}
                modules={[Navigation]}
            >
            </StyledSwiper>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    padding-left: 80px;
    display: flex;
    align-items: flex-end;
    gap: 30px;
`;

const Counter = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: #42567a;
`;

const StyledSwiper = styled(Swiper)`
    width: 100%;
    display: none;
`;

const Type = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #42567a;
`