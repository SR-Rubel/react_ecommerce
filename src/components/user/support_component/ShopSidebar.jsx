import React,{useEffect} from 'react'
import axios from 'axios'

import { setCategories } from '../../../store/categorySlice';
import { setBrands } from '../../../store/brandSlice';
import { setSubCategories } from '../../../store/subcategorySlice';
import { setProducts } from '../../../store/userProductSlice';
import { useDispatch,useSelector } from 'react-redux';

function ShopSidebar() {
    const dispatch = useDispatch();
    const request=(url,actionFunc)=>{
        axios.get(url)
        .then(response=>{
            response=response.data.data;
            dispatch(actionFunc(response))
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(() => {
        request("list-category",setCategories)
        request("brand-list",setBrands)
        request("list-subcategories",setSubCategories)

    }, [])

    const categories=useSelector(state=>state.categories.categories);
    const brands=useSelector(state=>state.brands.brands);
    const subcategories=useSelector(state=>state.subcategories.subcategories);
    const products=useSelector(state=>state.userProducts.userProducts)

    const By=(e,url1st,url2nd)=>{
        e.preventDefault();
        const index=e.target.selectedIndex
        const element=e.target.childNodes[index]
        const id=element.getAttribute('id')
        // console.log(id)
        axios.get(url1st+id+url2nd)
        .then(response=>{
            response=response.data;
            dispatch(setProducts(response))
            // console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const selectBrandHandler=(e)=>{
        By(e,"brand/","/products");

    }
    const selectCategoryHandler=(e)=>{
        By(e,"category/","/products")
    }
    const selectSubcategoryHandler=(e)=>{
        By(e,"sub-category/","/products")
    }
    const priceWise=(e)=>{
        e.preventDefault()
        const maxPrice=e.target.value;
        console.log(maxPrice);
        const filteredProducts=products.filter(item=>{
            const price=parseInt(item.price);
            console.log(price)
        })
        console.log(filteredProducts)
        dispatch(setProducts(products))
        dispatch(setProducts(filteredProducts)) //wrong logic
    }

    return (
        <div className="shop__sidebar">
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Brand</div>
                    </div>
                    <select className="w-50 ml-auto" name="" id="" 
                    onChange={(e)=>{selectBrandHandler(e)}}>
                        {
                            brands?.map(item=>{return <option id={item.id}>{item.name}</option>})
                        }
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Categories</div>
                    </div>
                    <select className="w-50 ml-auto" name="" id="" 
                    onChange={(e)=>{selectCategoryHandler(e)}}>
                        {
                            categories?.map(item=>{return <option id={item.id}>{item.name}</option>})
                        }
                    </select>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subcategories</div>
                    </div>
                    <select className="w-50 ml-auto" name="" id="" 
                    onChange={(e)=>{selectSubcategoryHandler(e)}}>
                        {
                            subcategories?.map(item=>{return <option id={item.id}>{item.name}</option>})
                        }
                    </select>
                </li>
                
            </ul>
            <div className="d-flex mt-5 justify-content-center p-3">
                <p style={{letterSpacing:'.5rem'}}>Price: </p>
                <input type="range" min="50" max="100" class="slider" id="myRange" 
                onChange={(e)=>{priceWise(e)}}
                />
            </div>
        </div>
    )
}

export default ShopSidebar
