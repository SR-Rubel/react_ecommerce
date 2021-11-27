import React, { useRef,useEffect } from 'react'
import header_video from '../../../img/orange.mp4'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

function Header() {
  const head_left=useRef();
  const head=useRef();
  const button=useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger:{
        trigger:head.current,
        start: "top bottom",
        end: "center",
        // toggleActions:"restart none resume none",
        scrub: true,
      },
      
    })
    .from(head_left.current,{yPercent: 170},0)
    .from(button.current,{yPercent:170},0)
  }, [])
    
  return (
    <div className="header" ref={head}>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop >
            <source src={header_video} type="video/mp4" />
            Your browser is not supported!
        </video>
      </div>

      <div className="row h-100 py-5">
        <div className="col-md-6  header__left" ref={head_left}>
          Choose organic food for your health
        </div>
        <div className="parallax col-md-6  header__right" ref={button}>
          <div className="btn btn-outline-primary">Shop Now</div>
        </div>
      </div>
    </div>
  )
}

export default Header
