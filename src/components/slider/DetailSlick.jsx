import React from "react";
import Slider from "react-slick";

function DetailSlick({img, price, dis}) {
    let discount = ((dis / price) * 100).toFixed(0)
    const settings = {
        customPaging: function (i) {
            return (
                <a style={{
                    display: "flex",
                    gap : "10px",
                    width: "90px",
                    height: "90px",
                    overflow: "hidden"
                }}>
                    <img style={{
                        height: "100%",
                        objectFit: "cover"
                    }} src={`${img[i]}`} />
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
                {img.map((item, i) => {
                    return <div className="bg-white relative !flex justify-center items-center rounded-md lg:h-[570px] h-[360px]" key={i}>
                        <img className="rounded-md h-full w-full" src={`${item}`} />
                        <span className="bg-[#333333] absolute top-3 left-3 rounded text-white py-1 px-[14px] uppercase block font-bold">new</span>
                        <span className={`bg-[#38CB89] absolute top-12 left-3 rounded text-white ${dis ? 'block' : 'hidden'} py-1 px-[14px] uppercase font-bold`}>-{discount}%</span>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default DetailSlick;
