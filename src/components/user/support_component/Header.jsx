import React from 'react'
import header_video from '../../../img/orange.mp4'

function Header() {
    return (
     <div className="header">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop >
              <source src={header_video} type="video/mp4" />
              Your browser is not supported!
          </video>
        </div>

        <div className="row h-100 py-5">
          <div data-direction="verticle" data-rate="-0.5" className="col-md-6  header__left parallax">
            Choose organic food for your health
          </div>
          <div data-direction="verticle" data-rate="-0.5" className="parallax col-md-6  header__right">
            <div className="btn btn-outline-primary">Shop Now</div>
          </div>
        </div>
      </div>
    )
}

export default Header
