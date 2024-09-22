import { forwardRef } from "react";
import Slider from "react-slick";
import ProductCard from "../static/ProductCard";

const SearchSlider = forwardRef((props, ref) => {
    const {arr} = props
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    console.log(arr)

    return (
        <Slider ref={ref} {...settings}>
            {arr.map((item, index) => (
                <div key={index} className="px-3">
                    <ProductCard item={item} x={index % 2 ? 4 : 5} />
                </div>
            ))}
        </Slider>
    );
});

export default SearchSlider;