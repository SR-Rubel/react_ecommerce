import React,{useEffect,useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

import leaf_vector1 from '../../../img/leaf_vector1.svg';
import logo1 from '../../../img/logo1.png';
import logo2 from '../../../img/logo2.png';

function BrandsHome() {
  const brand_container=useRef();
  const barand_left=useRef();
  const brand_right=useRef();
  const brand_middle=useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

     const scoll_value={
        trigger:brand_container.current,
        start: "center bottom",
        end: "top top",
        // start: "top bottom",
        // end: "center top",
        // toggleActions:"restart none resume none",
        scrub: true,
      }
    // gsap.from(product_left.current,{scrollTrigger:scoll_value,y:120,duration: 0.3})
    // gsap.from(product_img.current,{scrollTrigger:scoll_value,opacity:0,y:120, duration: 0.2})
      gsap.from(barand_left.current,{scrollTrigger:scoll_value,yPercent:80,xPercent:80,opacity:0})
      gsap.from(brand_right.current,{scrollTrigger:scoll_value,yPercent:80,xPercent:-80})
      gsap.from(brand_middle.current,{scrollTrigger:scoll_value,letterSpacing:"3rem"})
  }, [])
  
  return (
      <div className="brand" ref={brand_container}>
    <div className="brand__leaf row">
      <div className="col-md-3">
        <div className="brand__leaf-1">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-2">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-3">
          <img src="imhg/leaf_vector1.svg" alt="" />
        </div>
        <div className="brand__leaf-4">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-5">
          <img src={leaf_vector1} alt="" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="brand__leaf-1">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-2">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-3">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-4">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-5">
          <img src={leaf_vector1} alt="" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="brand__leaf-1">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-2">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-3">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-4">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-5">
          <img src={leaf_vector1} alt="" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="brand__leaf-1">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-2">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-3">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-4">
          <img src={leaf_vector1} alt="" />
        </div>
        <div className="brand__leaf-5">
          <img src={leaf_vector1} alt="" />
        </div>
      </div>
    </div>
    
    <div className="brand__middle" ref={brand_middle}>
      <h2>Brands</h2>
    </div>

    <div className="brand__left" ref={barand_left}>

      <div className="brand__left-1">
        <img src={logo1} alt="" />
      </div>
      <div className="brand__left-2">
        <img src={logo2} alt="" />
      </div>
      <div className="brand__left-3">
        <img src={logo1} alt="" />
      </div>
    </div>
    
    <div className="brand__right" ref={brand_right}>

      <div className="brand__right-1">
        <img src={logo1} alt="" />
      </div>
      <div className="brand__right-2">
        <img src={logo2} alt="" />
      </div>
      <div className="brand__right-3">
        <img src={logo1} alt="" />
      </div>
    </div>
  </div>
  )
}

export default BrandsHome
