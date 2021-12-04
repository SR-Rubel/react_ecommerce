import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AdminContainer from './AdminContainer'


function EditProduct(props) {

    const products = useSelector(state => state.products.products)
    const product=products.filter(item=>item.id==props.match.params.id)[0]
    console.log("======",product)

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [])

    return (
    <AdminContainer>
        <section className="content">
        <div className="container-fluid">
            {/* SELECT2 EXAMPLE */}
            <div className="card card-default">
            <div className="card-header">
                <h3 className="card-title">Add Product</h3>
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
                    <label>Product Name</label>
                    <input class="form-control" value ={product.name} type="text" placeholder="Default input" aria-label="default input example"></input>
                <div className="col-md-6 mt-3">
                    <div className="form-group">
                    <label>Category</label>
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

                    <div className="form-group">
                    <label>Brand</label>
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
                    
                </div>
                {/* /.col */}
                <div className="col-md-6 mt-3">
                    
                    {/* /.form-group */}
                    <div className="form-group">
                    <label>SubCategory</label>
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

                    
                    <label>Price</label>
                    <input class="form-control" type="text" placeholder="Enter Price" aria-label="default input example"></input>
                    {/* /.form-group */}
                </div>
                {/* /.col */}
                </div>
                {/* /.row */}
                
                <div className="row">
                    <div className="form-group">

                        <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Default file input example</label>
                        <input className="form-control" style={{width:'100%'}} type="file" id="formFile" />
                        </div>
                    </div>
                    {/* <div className="col-12 col-sm-6">

                    </div>

                    <div className="col-12 col-sm-6">
                        
                    </div> */}

                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <label>Product Size</label>
                        <input class="form-control" type="text" placeholder="Enter Price" aria-label="default input example"></input>
                    </div>
                    <div className="col-12 col-sm-6">
                        <label>Product Color</label>
                        <input class="form-control" type="text" placeholder="Enter Price" aria-label="default input example"></input>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary m-3">Submit</button>
            </div>
        </div></section>
    </AdminContainer>

    )
}

export default EditProduct