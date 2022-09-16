import React, { useState } from "react";
import { sliderData } from "./sliderData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <>
            <section className="slider">
                <ArrowBackIosIcon className="left-icon" onClick={prevSlide} />
                <ArrowForwardIosIcon className="right-icon" onClick={nextSlide} />
                {sliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? "slide-active" : "slide"}
                            key={index}
                        >
                            {index === current && (
                                <img
                                    src={slide.image}
                                    className="image"
                                    // onClick={handleClick(index)}
                                    alt="..."
                                />
                            )}
                        </div>
                    );
                })}
            </section>
        </>
    );
}