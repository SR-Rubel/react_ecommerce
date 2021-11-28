import React from 'react'

import {useEffect,useState} from 'react';
import axios from 'axios';

import {addSubCategory,editSubCategory,deleteSubCategroy,setSubCategories} from '../../store/subcategorySlice'
import {setCategories} from '../../store/categorySlice'

import {useDispatch,useSelector} from 'react-redux'
import Moment from 'react-moment';
import AdminContainer from './AdminContainer';



function SubCategory() {

    const [cat,setCat]=useState({});
    const [loading,setLoding]=useState(false);
    const [editable,setEditable]=useState('');
    const [edit,setEdit]=useState({});
    console.log(edit);

    console.log(cat)
    const dispatch = useDispatch();
    const subcategories = useSelector(state => state.subcategories.subcategories)
    const categories = useSelector(state => state.categories.categories)
    console.log(subcategories);

    useEffect(()=>{

        axios.get('/admin/list-category')
        .then(response=>{
            const data=response.data.data
            if(response.data.status)
               dispatch(setCategories(data))
        })
        .catch(error=>{
            console.log(error);
        })

         axios.get('/admin/list-subcategories')
        .then(response=>{
            const data=response.data.data
            if(response.data.status)
               dispatch(setSubCategories(data))
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    const submitHandler=e=>{
        e.preventDefault()
        setLoding(true);

        axios.post('admin/add-sub-category',cat)
        .then(response=>{
            const data=response.data.data
            console.log(response)
            setLoding(false);
            if(response.data.status)
            {
                dispatch(addSubCategory(data))
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const deleteHandler=(e,id)=>{
        e.preventDefault()
        axios.delete('admin/delete-subcategory/'+id)
        .then(response=>{
            console.log(response)
            dispatch(deleteSubCategroy(id))
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const editableHandler=(e,id)=>{
        e.preventDefault()
        editable?setEditable(''):setEditable(id)

    }
    
    const editHandler=(e,id)=>{
        e.preventDefault()
        axios.post('/admin/edit-subcategory/'+id,edit)
        .then(response=>{
            console.log(response)
            if(response.data.status){
                dispatch(editSubCategory({id,edit}))
                setEditable('')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
    <AdminContainer>
        <section className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
            <div className="col-sm-6">
            <h1>Sub Categories</h1>
            </div>
            <div className="col-sm-6">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal-default">
                    Add New
                </button>

{/* ================modal=================================== */}
                <div className="modal fade" id="modal-default">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        

                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Add Sub Category</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Select sub category</label>
                                        <select 
                                            onChange={e=>setCat({...cat,category_id:e.target.childNodes[e.target.selectedIndex].getAttribute('id')})}
                                            className="form-control"
                                        >
                                            <option>Select Category</option>
                                            {
                                                categories?.map(category=><option id={category.id}>{category.name}</option>)
                                            }
                                        </select>
                                        <br/>
                                        <label htmlFor="exampleInputEmail1">Sub Category Name</label>
                                        <input onChange={e=>setCat({...cat,name:e.target.value})} type="text" className="form-control" placeholder="name" required/>
                                    </div>
                                </div>
                                <div className="card-footer">
                                <button type="submit" className="btn btn-primary toastrDefaultSuccess" onClick={e=>submitHandler(e)}>Submit</button>
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
                <div className="card-body">
                {
                    subcategories && (<table id="example2" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>SubCategory Id</th>
                        <th>SubCategory Id</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           subcategories?.map(category=>{
                                return <tr>
                                    <td>{category.id}</td>
                                    {editable!==category.id?<td>{category.name}</td>:<div>
                                        <input type="text" placeholder={category.name}  onChange={e=>setEdit({name:e.target.value})} />
                                        <button onClick={e=>editHandler(e,category.id)} className="btn btn-dark">submit</button>
                                        </div>}
                                    <td> <Moment fromNow>{category.created_at}</Moment></td>
                                    <td>
                                    <Moment fromNow>{category.updated_at}</Moment> 
                                    <button style={{marginLeft:"30px"}} className='btn btn-danger' onClick={e=>deleteHandler(e,category.id)}>delete</button>
                                    <button 
                                    style={{marginLeft:"30px"}} 
                                    className='btn btn-primary' 
                                    onClick={e=>editableHandler(e,category.id)}>edit</button>
                                    </td>
                                    </tr>
                            })
                        }
                    

                    </tbody>
                    <tfoot>
                    <tr>
                        <th>SubCategory Id</th>
                        <th>SubCategory Id</th>
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

export default SubCategory
