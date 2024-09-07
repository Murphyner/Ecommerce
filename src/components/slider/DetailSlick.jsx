import React from "react";
import Slider from "react-slick";
import img from '../../assets/products1.jfif'
import img1 from '../../assets/products2.jfif'

const arr = [img, img1]

function DetailSlick() {
    const settings = {
        customPaging: function (i) {
            return (
                <a style={{
                    display: "block",
                    width: "90px",
                    height: "90px",
                    overflow: "hidden"
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }} src={`${arr[i]}`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {arr.map((item, i) => {
                    return <div className="bg-[#F7F7F7] relative !flex justify-center items-center rounded-md lg:h-[570px] h-[360px]" key={i}>
                        <img className="rounded-md h-full lg:object-cover" src={`${item}`} />
                        <span className="bg-[#333333] absolute top-3 left-3 rounded text-white py-1 px-[14px] uppercase block font-bold">new</span>
                        <span className="bg-[#38CB89] absolute top-12 left-3 rounded text-white py-1 px-[14px] uppercase block font-bold">-50%</span>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default DetailSlick;
