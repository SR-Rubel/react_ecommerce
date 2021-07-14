import React from 'react'
import Modal from './Modal'
import {useEffect,useState} from 'react';
import axios from 'axios';
import {addCategory,setCategories,deleteCategroy,editCategory} from '../../srore/categorySlice'
import {useDispatch,useSelector} from 'react-redux'
import Moment from 'react-moment';
import Loader from '../UI/Loader1'

function Category(props) {

    const [cat,setCat]=useState({});
    const [loading,setLoding]=useState(false);
    const [editable,setEditable]=useState('');
    const [edit,setEdit]=useState({});
    console.log(edit);

    console.log(cat)
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)
    console.log(categories);

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
    },[])

    const submitHandler=e=>{
        e.preventDefault()
        setLoding(true);

        axios.post('/admin/add-category',cat)
        .then(response=>{
            const data=response.data.data
            console.log(response)
            setLoding(false);
            if(response.data.status)
            {
                dispatch(addCategory(data))
                props.history.push('/categories')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const deleteHandler=(e,id)=>{
        e.preventDefault()
        axios.delete('admin/delete-category/'+id)
        .then(response=>{
            console.log(response)
            dispatch(deleteCategroy(id))
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
        axios.post('/admin/edit-category/'+id,edit)
        .then(response=>{
            console.log(response)
            if(response.data.status){
                dispatch(editCategory({id,edit}))
                setEditable('')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
    <div>
    <section className="content-header">
        <div className="container-fluid">
        <div className="row mb-2">
            <div className="col-sm-6">
            <h1>Categories</h1>
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
                                <h3 className="card-title">Add Category</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Category Name</label>
                                        <input onChange={e=>setCat({name:e.target.value})} type="text" className="form-control" placeholder="name" required/>
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
                    categories && (<table id="example2" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Category Id</th>
                        <th>Category Id</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           categories?.map(category=>{
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
                        <th>Category Id</th>
                        <th>Category Id</th>
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
    </div>
 

    )
}

export default Category
