import React,{useEffect,useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

function Footer() {
    const footer=useRef();
    // const barand_left=useRef();
    // const about=useRef();
    const contact=useRef();
    const help=useRef();
    useEffect(() => {
        const about=document.querySelector(".footer__about");
        // console.log("========",about.current);
        gsap.registerPlugin(ScrollTrigger);
    
         const scoll_value={
            trigger:footer.current,
            start: "center bottom",
            end: "top 600px",
            marker:true,
            scrub: true,
          }
          gsap.from(about,{scrollTrigger:scoll_value,opacity:0,xPercent:-80})
          gsap.from(contact.current,{scrollTrigger:scoll_value,yPercent:80})
          gsap.from(help.current,{scrollTrigger:scoll_value,xPercent:40})
      }, [])
    

    return (
        <footer className="row text-center footer" ref={footer}>
            <div className="col-md-4 col-sm-12 footer__about" >
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem, incidunt voluptates necessitatibus tenetur odio ea </p>
            </div>
            <div className="col-md-4 col-sm-12 footer__contact" ref={contact}>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem, incidunt voluptates necessitatibus tenetur odio ea </p>
            </div>
            <div className="col-md-4 col-sm-12 footer__help" ref={help}>
                <h2>Help</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem, incidunt voluptates necessitatibus tenetur odio ea </p>
            </div>
        </footer>
    )
}

export default Footer
