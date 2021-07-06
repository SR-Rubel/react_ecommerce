import React from 'react'

function Modal() {
    return (
        <div>


        <div className="modal fade" id="modal-default">
            <div className="modal-dialog">
                <div className="modal-content">
                

                  <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Add New Cartegory</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Category Name</label>
                                <input type="text" className="form-control" placeholder="name" />
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>


                </div>
            </div>
        </div>

        </div>

    )
}

export default Modal
