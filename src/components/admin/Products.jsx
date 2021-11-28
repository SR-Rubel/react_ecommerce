import React from 'react'
import { Link } from 'react-router-dom'

import {useEffect,useState} from 'react';
import axios from 'axios';
import {setProducts,deleteProducts} from '../../store/productSlice'
import {useDispatch,useSelector} from 'react-redux'
import Moment from 'react-moment';
import AdminContainer from './AdminContainer';


function Products(props) {

    const dispatch=useDispatch();
    const products=useSelector(state=>state.products.products)
    console.log(products)

    const deleteHandler=(e,id)=>{
        e.preventDefault()
        axios.delete('admin/delete-product/'+id)
        .then(response=>{
            console.log(response)
            if(response.data.status=== 0){
                dispatch(deleteProducts(id))
            }
        })
        .catch(erorr=>{
            console.log(erorr)
        })
    }

    const editableHandler=()=>{

    }

    useEffect(()=>{

         axios.get('/admin/all-product')
        .then(response=>{
            const data=response.data.data
            if(response.data.status)
               dispatch(setProducts(data.data))
        })
        .catch(error=>{
            console.log(error);
        })
    },[])


    return (
    <AdminContainer>
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
                <div className="card-body">
                {
                    products && (<table id="example2" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Product id</th>
                        <th>Product name</th>
                        <th>Product category</th>
                        <th>Product sub category</th>
                        <th>Product brand</th>
                        <th>image</th>
                        <th>Product details</th>
                        <th>Product size</th>
                        <th>Product color</th>
                        <th>price</th>
                        <th>discount price</th>
                        <th>stock</th>
                        <th>by 1 get 1</th>
                        <th>hot deal</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           products?.map(product=>{
                                return <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category_id}</td>
                                    <td>{product.subcategory_id}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.image}</td>
                                    <td>{product.details}</td>
                                    <td>{product.size}</td>
                                    <td>{product.color}</td>
                                    <td>{product.price}</td>
                                    <td>{product.discout_price}</td>
                                    <td>{product.stockout}</td>
                                    <td>{product.by_one_get_one}</td>
                                    <td>{product.hot_deal}</td>
                                    <td> <Moment fromNow>{product.created_at}</Moment></td>
                                    <td>
                                    <Moment fromNow>{product.updated_at}</Moment> 
                                    <button style={{marginLeft:"30px"}} className='btn btn-danger' onClick={e=>deleteHandler(e,product.id)}>delete</button>
                                    <button 
                                    style={{marginLeft:"30px"}} 
                                    className='btn btn-primary' 
                                    >edit</button>
                                    </td>
                                    </tr>
                            })
                        }
                    

                    </tbody>
                    <tfoot>
                    <tr>
                        <th>Product id</th>
                        <th>Product name</th>
                        <th>Product category</th>
                        <th>Product sub category</th>
                        <th>Product brand</th>
                        <th>image</th>
                        <th>Product details</th>
                        <th>Product size</th>
                        <th>Product color</th>
                        <th>price</th>
                        <th>discount price</th>
                        <th>stock</th>
                        <th>by 1 get 1</th>
                        <th>hot deal</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                    </tfoot>
                </table>)
                }
                </div>
            </div>
            </div>
            
        </div>
        
        </div>
    </section>
    </AdminContainer>

    )
}

export default Products
