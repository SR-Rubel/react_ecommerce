import React from 'react'

function Card({bg,icon}) {
    return (
        <div className="col-lg-3 col-6">

          <div className={"small-box "+bg}>
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              {icon}
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
          
        </div>
    )
}

export default Card
