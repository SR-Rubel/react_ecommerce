import React,{useEffect,useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"


function TopProduct({text,img}) {
  const slide=useRef();
  const product_left=useRef();
  const product_img=useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

     const scoll_value={
        trigger:slide.current,
        start: "center bottom",
        end: "top top",
        // start: "top bottom",
        // end: "center top",
        // toggleActions:"restart none resume none",
        scrub: true,
      }
    // gsap.from(product_left.current,{scrollTrigger:scoll_value,y:120,duration: 0.3})
    // gsap.from(product_img.current,{scrollTrigger:scoll_value,opacity:0,y:120, duration: 0.2})
      gsap.from(product_left.current,{scrollTrigger:scoll_value,yPercent:110,xPercent:110,opacity:0})
      gsap.from(product_img.current,{scrollTrigger:scoll_value,yPercent:110})
  }, [])
  return (
      <div className="container" ref={slide}>
          <div className="top_product row">
            <div className="col-md-6 top_product__left" ref={product_left}>
              <p> Top rated</p>
              <p>{text}</p>
            </div>
            <div className="col-md-6 top_product__right" ref={product_img}>
              <img src={img} alt="" className="top_product__right-img mt-5" />
            </div>
          </div>
      </div>
  )
}

export default TopProduct
