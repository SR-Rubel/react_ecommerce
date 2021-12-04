import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../Basic_component/ProductCard'
import Loading from '../../UI/Loading';
import axios from 'axios';

import { setProducts } from '../../../store/userProductSlice';
import { useDispatch,useSelector } from 'react-redux';


function ProductRow() {

    const dispatch=useDispatch();
    
    const [prevpageurl, setprevpageurl] = useState(null)
    const [nextpageurl, setnextpageurl] = useState(null)
    const [load, setload] = useState(true)

    useEffect(() => {
        axios.get('/all-product')
        .then(response=>{
            response=response.data.data
            console.log(response)
            dispatch(setProducts(response.data))
            setprevpageurl(response.prev_page_url);
            setnextpageurl(response.next_page_url);
            setload(false);

        })
        .catch(error=>{
            console.log(error);
        })
    }, [])

    const products=useSelector(state => state.userProducts.userProducts)
    
    const pageHandler=(e,changer)=>{
        e.preventDefault();
        const instance=axios.create({
            baseURL:' ',
            timeout:1000,
        });
        instance.get(changer)
        .then(response=>{
            response=response.data.data
            dispatch(setProducts(response.data))
            setprevpageurl(response.prev_page_url);
            setnextpageurl(response.next_page_url);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const nextHandler=(e,nextpageurl)=>{
        pageHandler(e,nextpageurl)
    }
    const prevHandler=(e,prevpageurl)=>{
        pageHandler(e,prevpageurl)
    }

    return (
        <div className="row">
            <div className="d-flex flex-row flex-wrap justify-content-around">
                {load?<Loading />:" "}
               {
                   products?.map(item=>{
                    return (<Link to={"/single-product/"+item.id}>
                        <ProductCard 
                        key={item.id}
                        img={"/img/"+item.image}
                        productCat="demo"
                        productTitle={item.name}
                        price={"$"+item.price}
                        btn1="Add to cart"
                        btn2="Add to wishlist" />
                        </Link>)
                   })
               }
                
                
            </div>

            <div className="d-flex justify-content-center my-5">
                { prevpageurl && <i className="bi bi-arrow-left-circle-fill mr-5" onClick={(e)=>{prevHandler(e)}}></i>}
                <i className="bi bi-arrow-right-circle-fill" onClick={(e)=>{nextHandler(e,nextpageurl)}}></i>
            </div>
        </div>
    )
}

export default ProductRow