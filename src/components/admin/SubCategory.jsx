import React from 'react'
import Modal from './Modal'

function SubCategory() {
    return (
    <div>
    <section className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
            <div className="col-sm-6">
            <h1>Sub Categories</h1>
            </div>
            <div className="col-sm-6">
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-default">
                    Add New
                </button>

{/* ================modal=================================== */}
                <div className="modal fade" id="modal-default">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        

                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Add sub Category</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Sub Category Name</label>
                                        <input type="text" className="form-control" placeholder="name" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
{/* ================modal=================================== */}

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
                <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
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

export default SubCategory
