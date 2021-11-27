import React from 'react'
import ProductCard from './ProductCard'
import Slickslider from './Slickslider'

function Recomended() {
    const slides=[
        <ProductCard 
                img="/img/juice4.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200"
                />,
        <ProductCard 
                img="/img/juice.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200" />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200" />,
         <ProductCard 
                img="/img/juice.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200" />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200" />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200" />,
         <ProductCard 
                img="/img/carrotjuice.png" 
                productCat="demo"
                productTitle="demo title"
                price="$200" />
        ];
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style,display: "block",background:"#87ff8b" }}
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
        <div className="recomended">
            <h1 className="ml-5">Reconmended</h1>
            <Slickslider
                setting={{
                    slidesToShow:5,
                    slidesToScroll: 4,
                    dots: false,
                    autoplay: false,
                    autoplaySpeed:2000,
                    prevArrow: <SamplePrevArrow />,
                    nextArrow: <SampleNextArrow />,
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
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                }}
                slides={slides}
            />
        </div>
    )
}

export default Recomended
