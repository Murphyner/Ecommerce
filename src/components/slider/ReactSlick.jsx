import { forwardRef, useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../static/ProductCard";
import Loading from "../static/Loading";

const ReactSlick = forwardRef((props, ref) => {
    const { arr } = props 

    const [flag, setFlag] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    useEffect(() => {
        if(arr.length > 0){
            setFlag(true)
        }
    }, [arr])

    if(!flag){
        return <Loading />
    }

    return (
        <Slider ref={ref} {...settings}>
            {flag && arr.map((item, index) => (
                <div key={index} className="px-3">
                    <ProductCard item={item} x={index} />
                </div>
            ))}
        </Slider>
    );
});

export default ReactSlick;
