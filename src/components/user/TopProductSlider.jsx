import React from 'react'
import Slickslider from '../Basic_component/Slickslider';
import TopProduct from './support_component/TopProduct';
import slideImg1 from '../../img/leaf1.png';
import slideImg2 from '../../img/juice.png';
import slideImg3 from '../../img/carrotjuice.png';


function TopProductSlider() {
    const slides=[
        <TopProduct text="more than 1000 sells" img={slideImg2} />,
        <TopProduct text="more than 1000 sells" img={slideImg1} />,
        <TopProduct text="more than 1000 sells" img={slideImg3} />,
        ];


    const style={
        background:"black"
        
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style,display: "block",background:"#87ff8b",right:"16px" }}
            onClick={onClick}
            />
        );
        }
          
    function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block",background:"#87ff8b",left:"16px",zIndex:'1'}}
        onClick={onClick}
        />
    );
    }
    return (
    // <div className="user">
    //     <div className="user_body">
    //         <div className="user_avater">Avater</div>
    //         <h4 className="user_name">User: Lorem, ipsum.</h4>
    //         <button className="btn btn-primary">button</button>
            
    //     </div>
    // </div>
 
    <Slickslider 
    setting={{
        slidesToShow:1,dots: false,
        autoplay: false,
        autoplaySpeed:2000,
        prevArrow: <SamplePrevArrow style={style} />,
        nextArrow: <SampleNextArrow style={style} />,
    }}
    slides={slides} />
    )
}

export default TopProductSlider
