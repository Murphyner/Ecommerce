import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import Slider from "react-slick";
import ProductCard from "../static/ProductCard";

function ResponsiveSlick() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {Array.from({ length: 9 }).map((_, index) => (
                    <div key={nanoid()} className="px-3">
                        <ProductCard x={index % 2 ? 3 : 4} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ResponsiveSlick;
