import React from 'react'
import leaf_vector1 from '../../../img/leaf_vector1.svg';
import logo1 from '../../../img/logo1.png';
import logo2 from '../../../img/logo2.png';

function BrandsHome() {
    return (
        <div className="brand">
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
     
      <div className="brand__middle">
        <h2>Brands</h2>
      </div>

      <div className="brand__left">

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
      
      <div className="brand__right">

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
