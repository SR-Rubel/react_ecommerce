import React from 'react'
import Slickslider from '../Basic_component/Slickslider';
import TopProduct from './support_component/TopProduct';
import './UserProfile.scss';
import slideImg1 from '../../img/leaf1.png';
import Bal from './support_component/Bal';

function UserProfile() {
       const slides=[
            <TopProduct text="more than 1000 sells" img={slideImg1} />,
            <TopProduct text="more than 1000 sells" img={slideImg1} />,
            <TopProduct text="more than 1000 sells" img={slideImg1} />,
            ];
        return (
        // <div className="user">
        //     <div className="user_body">
        //         <div className="user_avater">Avater</div>
        //         <h4 className="user_name">User: Lorem, ipsum.</h4>
        //         <button className="btn btn-primary">button</button>
                
        //     </div>
        // </div>
     
        <Slickslider setting={{slidesToShow:1,dots: false,autoplay: true,autoplaySpeed:2000,}} slides={slides} />
    )
}

export default UserProfile
