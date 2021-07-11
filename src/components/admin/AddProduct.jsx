import React from 'react'

function AddProduct() {
    return (
        <section className="content">
    <div className="container-fluid">
        {/* SELECT2 EXAMPLE */}
        <div className="card card-default">
        <div className="card-header">
            <h3 className="card-title">Select2 (Default Theme)</h3>
            <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
            </button>
            </div>
        </div>
        {/* /.card-header */}
        <div className="card-body">
            <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                <label>Minimal</label>
                <select className="form-control select2" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select>
                </div>
                {/* /.form-group */}
                <div className="form-group">
                <label>Disabled</label>
                <select className="form-control select2" disabled="disabled" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select>
                </div>
                {/* /.form-group */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
                <div className="form-group">
                <label>Multiple</label>
                <select className="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select>
                </div>
                {/* /.form-group */}
                <div className="form-group">
                <label>Disabled Result</label>
                <select className="form-control select2" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option disabled="disabled">California (disabled)</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select>
                </div>
                {/* /.form-group */}
            </div>
            {/* /.col */}
            </div>
            {/* /.row */}
            <h5>Custom Color Variants</h5>
            <div className="row">
            <div className="col-12 col-sm-6">
                <div className="form-group">
                <label>Minimal (.select2-danger)</label>
                <select className="form-control select2 select2-danger" data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                </select>
                </div>
                {/* /.form-group */}
            </div>
            {/* /.col */}
            <div className="col-12 col-sm-6">
                <div className="form-group">
                <label>Multiple (.select2-purple)</label>
                <div className="select2-purple">
                    <select className="select2" multiple="multiple" data-placeholder="Select a State" data-dropdown-css-class="select2-purple" style={{width: '100%'}}>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                    </select>
                </div>
                </div>
                {/* /.form-group */}
            </div>
            {/* /.col */}
            </div>
            {/* /.row */}
        </div>
        {/* /.card-body */}
        <div className="card-footer">
            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
            the plugin.
        </div>
        </div>
        {/* /.card */}
        {/* SELECT2 EXAMPLE */}
    </div></section>

    )
}

export default AddProduct
