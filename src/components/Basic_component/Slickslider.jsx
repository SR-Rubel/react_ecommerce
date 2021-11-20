import React from "react";
import Slider from "react-slick";


function Slickslider({
    setting={},
    slides=[
    <h3>1</h3>,
    <h3>2</h3>,
    <h3>3</h3>,
    <h3>4</h3>,
    <h3>4</h3>,
    <h3>5</h3>,
    <h3>6</h3>],

}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...setting}
    console .log(slides);
    return (
          
        <div>
            <Slider {...settings}>
                {slides.map(item=><div>{item}</div>)}
            </Slider>
        </div>
    )
}

export default Slickslider
