import React,{useState} from 'react'
import ProductCard from '../../Basic_component/ProductCard';
import Slickslider from '../../Basic_component/Slickslider';
import { useEffect } from 'react';


function SingleproductSlider() {
    const slides=[
        <ProductCard 
                img="/img/juice4.png" 
                 />,
        <ProductCard 
                img="/img/juice.png" 
                 />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                 />,
         <ProductCard 
                img="/img/juice.png" 
                 />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                 />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                 />
        ];

    var slider1=null,slider2=null;

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const refFunc = (slider) => slider1 = slider
    const refFunc2 = (slider) => slider2 = slider

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style,display: "block",background:"#87ff8b"}}
            onClick={onClick}
            />
        );
        }
          
    function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block",background:"#87ff8b",zIndex:'1'}}
        onClick={onClick}
        />
    );
    }
    return (
        <div className="sproduct__imgslider">
            <div className="sproduct__imgslider--images">
                <Slickslider
                    setting={{
                        slidesToShow:1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay: false,
                        autoplaySpeed:2000,
                        speed: 5,
                        // prevArrow: <SamplePrevArrow />,
                        // nextArrow: <SampleNextArrow />,
                        asNavFor: nav2,
                        ref: refFunc,
                    }}
                    slides={slides}
                        />
            </div>
            <div className="sproduct__imgslider--pager">
                
                <Slickslider
                    setting={{
                        slidesToShow:4,
                        slidesToScroll: 4,
                        dots: false,
                        autoplay: false,
                        autoplaySpeed:2000,
                        prevArrow: <SamplePrevArrow />,
                        nextArrow: <SampleNextArrow />,
                        focusOnSelect: true,
                        asNavFor: nav1,
                        ref: refFunc2 
                    }}
                    slides={slides}
                />
            </div>

        </div>
    )
}

export default SingleproductSlider
