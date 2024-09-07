import { forwardRef } from "react";
import Slider from "react-slick";
import ProductCard from "../static/ProductCard";

const ReactSlick = forwardRef((props, ref) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <Slider ref={ref} {...settings}>
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="px-3">
                    <ProductCard x={index} />
                </div>
            ))}
        </Slider>
    );
});

export default ReactSlick;
