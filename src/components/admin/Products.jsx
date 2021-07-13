import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

function Products() {
    return (
    <div>
    <section className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
            <div className="col-sm-6">
            <h1>Products</h1>
            </div>
            <div className="col-sm-6">
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-default">
                    <Link to="/add-product">Add Product</Link>
                </button>

            </div>
        </div>
        </div>
    </section>
   
    <section className="content">
        <div className="container-fluid">
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-header">
                    Products list
                </div>
                {/* /.card-header */}
                <div className="card-body">
                <table id="example2" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Trident</td>
                        <td>Internet
                        Explorer 4.0
                        </td>
                        <td>Win 95+</td>
                        <td> 4</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>Trident</td>
                        <td>Internet
                        Explorer 5.0
                        </td>
                        <td>Win 95+</td>
                        <td>5</td>
                        <td>C</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                    </tr>
                    </tfoot>
                </table>
                </div>
            </div>
            </div>
            
        </div>
        
        </div>
    </section>
    
    </div>
 

    )
}

export default Products
