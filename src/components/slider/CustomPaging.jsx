 import React, { useState } from "react";
import Slider from "react-slick";

function CustomPaging({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        customPaging: function (i) {
            return (
                <div className="dot-container">
                    <a href="#" className="p-2 rounded-[50px] w-20 inline-block h-20">
                        <img className="h-full w-full" src={data[i].image} alt={`Thumbnail ${i}`} />
                    </a>
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setActiveIndex(current)
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-center">
                            <p className="w-full md:w-6/12 text-center">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomPaging;
