import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

import {setCategories} from '../../store/categorySlice'
import {setSubCategories} from '../../store/subcategorySlice'
import {setBrands} from '../../store/brandSlice'
import { addProducts } from '../../store/productSlice'

function AddProduct(props) {

    const dispatch = useDispatch()
    const [selectedCat,setSeclectedCat]=useState(null)
    const [product,setProduct]=useState({})
    console.log(product);
    // console.log("selected categroy id ", selectedCat);

    useEffect(()=>{
        //load categories

        axios.get('/admin/list-category')
        .then(response=>{
            const data=response.data.data
            if(response.data.status)
               dispatch(setCategories(data))
        })
        .catch(error=>{
            console.log(error);
        })

        // load sub categories

        axios.get('/admin/list-subcategories')
        .then(response=>{
            const data=response.data.data
            if(response.data.status)
               dispatch(setSubCategories(data))
        })
        .catch(error=>{
            console.log(error);
        })

        //load brands

        axios.get('/admin/brand-list')
        .then(response=>{
            const data=response.data.data
            if(response.data.status)
               dispatch(setBrands(data))
        })
        .catch(error=>{
            console.log(error);
        })


    },[])
    
    const categories = useSelector(state => state.categories.categories)
    const brands = useSelector(state => state.brands.brands) 
    const subcategories = useSelector(state => state.subcategories.subcategories)


    const submitHandler=(e)=>{
        e.preventDefault();

        const data=new FormData()
        data.append('image',product.image,product.image?.name)
        data.append('name',product.name)
        data.append('category_id',product.category_id)
        data.append('subcategory_id',product.subcategory_id)
        data.append('size',product.size)
        data.append('price',product.price)
        data.append('details',product.details)
        // data.append('color',product.color)
        // data.append('image',product.image)

        console.log(data)
        axios.post('/admin/add-product',data)
        .then(response=>{
            const res=response.data
            if(res.status){
                dispatch(addProducts(res.data))
                props.history.push('/products')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
    <section className="content">
        <div className="container-fluid">
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

{/* =========== product name input=========== */}
    <div className="card-body">
        <div className="row">
            <label>Product Name</label>
            <input onChange={e=>setProduct({...product,name:e.target.value})} class="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>

{/* =========== product name input=========== */}
            <div className="col-md-6 mt-3">
                <div className="form-group">
                    <label>Category</label>
                    <select 
                    onChange={e=>{
                        setSeclectedCat(e.target.childNodes[e.target.selectedIndex].getAttribute('id'));
                        setProduct({...product,category_id:e.target.childNodes[e.target.selectedIndex].getAttribute('id')})}
                    }
                    className="form-control" 
                    style={{width: '100%'}}
                        >
                        <option selected>Select Category</option>
                            {
                                categories?.map(category=><option id={category.id}>{category.name}</option>)
                            }
                    </select>
                </div>
{/* ========== Brand input============ */}
                <div className="form-group">
                    <label>Brand</label>
                    <select
                    onChange={e=>setProduct({...product,brand_id:e.target.childNodes[e.target.selectedIndex].getAttribute('id')})}
                    className="form-control" style={{width: '100%'}}>
                        <option selected>Select Brands</option>
                        {
                            brands?.map(brand=><option id={brand.id}>{brand.name}</option>)
                        }
                    </select>
                </div>
            </div>
{/* ========= sub category============ */}
            <div className="col-md-6 mt-3">
                <div className="form-group">
                    <label>SubCategory</label>
                    <select 
                    onChange={e=>setProduct({...product,subcategory_id:e.target.childNodes[e.target.selectedIndex].getAttribute('id')})}
                    className="form-control" style={{width: '100%'}}>
                        <option selected>select sub category</option>
                        {
                            selectedCat?
                            subcategories.filter(cat=>cat.category_id==selectedCat).map(cat=><option id={cat.id}>{cat.name}</option>):
                            <option>==no category selected==</option>
                        }
                    </select>

{/* =========price input============ */}   
                        <label>Price</label>
                        <input 
                        onChange={e=>setProduct({...product,price:e.target.value})} 
                        class="form-control" 
                        type="text" 
                        placeholder="Enter Price" 
                        aria-label="default input example"></input>
                 </div>
            </div>
        </div>
    </div>

{/* =========file upload============ */}
    
    <div className="row">
        <div className="form-group">

            <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Product Image</label>
            <input onChange={e=>setProduct({...product,image:e.target.files[0]})} className="form-control" style={{width:'100%'}} type="file" id="formFile" />
            </div>
        </div>
    </div>

{/* =========color and size input ============ */}
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label>Product Size</label>
                    <input onChange={e=>setProduct({...product,size:e.target.value})} class="form-control" type="text" placeholder="Enter Price" aria-label="default input example"></input>
                </div>
                <div className="col-12 col-sm-6">
                    <label>Product Color</label>
                    <input onChange={e=>setProduct({...product,color:e.target.value})} class="form-control" type="text" placeholder="Enter Price" aria-label="default input example"></input>
                </div>
            </div>

{/* =========normal note============ */}
            <div className="row mt-5">
                <div className="form-group">
                    <textarea
                     className="form-control" 
                     style={{width:'85vw'}}
                     onChange={e=>setProduct({...product,details:e.target.value})}  
                     defaultValue={"enter details here"} />
                </div>
            </div>

{/* =========summer note============ */}
{/* =============================================== onChange attribute not working in text area============== */}
        <div className="row mt-5">
            <div className="col-md-12">
                <div className="card card-outline card-info">
                    <div className="card-header">
                        <h3 className="card-title">
                        Summernote
                        </h3>
                    </div>
                    
                    <div  className="card-body">
                        
                        <textarea className="form-control" onChange={e=>setProduct({...product,details:e.target.value})}  id="summernote" defaultValue={"Place <em>some</em> <u>text</u> <strong>here</strong>\n"} />
                    </div>
                 </div>
            </div>
        </div>
{/* =========summer note============ */}

        <button onClick={e=>submitHandler(e)} type="submit" class="btn btn-primary m-3">Submit</button>
        </div>

        </div>
        </div>
    </section>

    )
}

export default AddProduct