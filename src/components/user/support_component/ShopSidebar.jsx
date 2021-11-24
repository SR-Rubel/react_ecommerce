import React from 'react'

function ShopSidebar() {
    return (
        <div className="shop__sidebar">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Brand</div>
                    </div>
                    <select className="w-50 ml-auto" name="" id="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Categories</div>
                    </div>
                    <select className="w-50 ml-auto" name="" id="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subcategories</div>
                    </div>
                    <select className="w-50 ml-auto" name="" id="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </li>
                
            </ul>
        </div>
    )
}

export default ShopSidebar
